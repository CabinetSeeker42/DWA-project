const ws = require("ws");

const websocketServer = new ws.Server({ noServer: true });

// getOrders action send by the websocket
const sendWebsocketGetOrders = () => {
  websocketServer.clients.forEach((client) => {
    client.send(JSON.stringify({ action: "getOrders" }));
  });
};

// getReceived action send by the websocket
const sendWebsocketGetReceived = () => {
  websocketServer.clients.forEach((client) => {
    client.send(JSON.stringify({ action: "getReceived" }));
  });
};

// open websocket connection with different actions to use
websocketServer.on("connection", (socket, req) => {
  socket.on("message", (message) => {
    const parsedMessage = JSON.parse(message);

    switch (parsedMessage.action) {
      case "getOrders":
        sendWebsocketGetOrders();
        break;

      case "getReceived":
        sendWebsocketGetReceived();
        break;

      default:
        break;
    }
  });
});

module.exports = {
  websocketServer,
  sendWebsocketGetOrders,
  sendWebsocketGetReceived,
};
