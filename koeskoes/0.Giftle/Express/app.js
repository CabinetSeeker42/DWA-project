const express = require("express");
const http = require("http");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const { websocketServer } = require("./commonFunctions/webSocketServer");
require("./model/uploadModel");

require("dotenv").config();

const app = express();
// const uploads = mongoose.model("UploadSchema");

app.use(express.static("build"));

app.use(cors({ origin: true, credentials: true }));
app.options("*", cors({ origin: true, credentials: true }));

app.use(express.json());

/*---------------ROUTERS---------------*/

const fileUpload = require("./routes/orders");
const videos = require("./routes/videos");
const mails = require("./routes/mails");

app.use("/api/orders", fileUpload);
app.use("/api/videos", videos);
app.use("/api/mails", mails);

app.use("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

/*-----------END OF ROUTERS------------*/

const httpServer = http.createServer(app);

// Handshake upgrade for use with websockets
httpServer.on("upgrade", (req, networkSocket, head) => {
  websocketServer.handleUpgrade(req, networkSocket, head, (newWebSocket) => {
    websocketServer.emit("connection", newWebSocket, req);
  });
});

// Express server
const port = process.env.PORT || 4000;
httpServer.listen(port, () => {
  mongoose.connect(
    `mongodb://localhost:27017/giftle`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    () => {
      console.log(`Server started on port ${port}`);
    }
  );
});
