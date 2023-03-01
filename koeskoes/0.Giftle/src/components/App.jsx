import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Temp components
import CheckOutPage from "./Buyer/CheckOutPage";
import CheckOutPageDone from "./Buyer/CheckOutPageDone";
import CheckOutPageDoneMagento from "./Buyer/CheckOutPageDoneMagento";

// Buyer components
import ControlOrderPage from "./Buyer/ControlOrderPage";
import NoTextCodePage from "./Buyer/NoTextCodePage";
import HomeBuyerPage from "./Buyer/HomeBuyerPage";
import CreateVideoPage from "./Buyer/CreateVideoPage";
import FinalPage from "./Buyer/FinalPage";
import ReactionWatchPage from "./Buyer/ReactionWatchPage";

// Receiver components
import HomeReceiverPage from "./Receiver/HomeReceiverPage";
import QRPage from "./Receiver/QRPage";
import ScanQRPage from "./Receiver/ScanQRPage";
import TextCodePage from "./Receiver/TextCodePage";
import VideoPage from "./Receiver/VideoPage";
import SharedVideoPage from "./Receiver/SharedVideoPage";
import ReactionHomePage from "./Receiver/ReactionHomePage";
import TextReactionPage from "./Receiver/TextReactionPage";
import VideoReactionPage from "./Receiver/VideoReactionPage";
import ReactionSentPage from "./Receiver/ReactionSentPage";
import ReactionAlreadySentPage from "./Receiver/ReactionAlreadySentPage";

// Employee components
import CheckOrdersPage from "./Employee/CheckOrdersPage";

// Error 404 not found component
import NotFoundPage from "./NotFoundPage";

// Styling for different theme's
import "../styles/App.css";
// import "../styles/themes/Rituals.css";
// import "../styles/themes/GameMania.css";
// import "../styles/themes/DarkMode.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Temp Routes */}
          <Route path="/checkout" exact element={<CheckOutPage />} />
          <Route path="/checked-out" exact element={<CheckOutPageDone />} />
          <Route
            path="/magento-checked-out"
            exact
            element={<CheckOutPageDoneMagento />}
          />
          {/* Perm Routes */}
          <Route
            path="/orderControl/:textCode"
            exact
            element={<ControlOrderPage />}
          />
          {/* Buyer Routes */}
          <Route path="/buyer/noTextCode" element={<NoTextCodePage />} />
          <Route path="/buyer" exact element={<HomeBuyerPage />} />
          <Route path="/buyer/create" exact element={<CreateVideoPage />} />
          <Route path="/buyer/thankyou" exact element={<FinalPage />} />
          <Route
            path="/buyer/reaction/:textCode"
            element={<ReactionWatchPage />}
          />
          {/* Receiver Router */}
          <Route path="/receiver" exact element={<HomeReceiverPage />} />
          <Route path="/receiver/qr-code" exact element={<QRPage />} />
          <Route path="/receiver/scan" exact element={<ScanQRPage />} />
          <Route path="/receiver/textcode" exact element={<TextCodePage />} />
          <Route
            path="/receiver/watchvideo/:textCode"
            element={<VideoPage />}
          />
          <Route
            path="/receiver/watchSharedVideo/:textCode"
            element={<SharedVideoPage />}
          />
          <Route
            path="/receiver/reaction/:textCode"
            element={<ReactionHomePage />}
          />
          <Route
            path="/receiver/text-reaction/:textCode"
            exact
            element={<TextReactionPage />}
          />
          <Route
            path="/receiver/video-reaction/:textCode"
            exact
            element={<VideoReactionPage />}
          />
          <Route
            path="/receiver/reaction-sent"
            exact
            element={<ReactionSentPage />}
          />
          <Route
            path="/receiver/reaction-already-sent"
            exact
            element={<ReactionAlreadySentPage />}
          />
          {/* Employee Routes */}
          <Route
            path="/employee/checkorders"
            exact
            element={<CheckOrdersPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
