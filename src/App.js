// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AuctionListPage from "./Components/AuctionListPage";
import AuctionPage from "./Components/AuctionPage";

function App() {
  const handleBidButtonClick = (user, walletConnected) => {
    if (user !== "org1 seller" && walletConnected) {
      window.location.href = "/auction-list";
    } else if (user === "") {
      alert("Select a User");
    } else if (!walletConnected) {
      alert("Connect Wallet to Bid on Auction");
    }
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home handleBidButtonClick={handleBidButtonClick} />} />
        <Route exact path="/auction-list" element={<AuctionListPage />} />
        <Route exact path="/auction" element={<AuctionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
