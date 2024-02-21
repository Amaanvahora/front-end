import React, { useState } from "react";
import "./AuctionPage.css";

const AuctionPage = () => {
  const [auctionName, setAuctionName] = useState("");
  const [auctionDescription, setAuctionDescription] = useState("");
  const [auctionStartingPrice, setAuctionStartingPrice] = useState(0);
  const [auctionDuration, setAuctionDuration] = useState(0);
  const [auctionEndTime, setAuctionEndTime] = useState(null);

  const createAuction = () => {
    // Perform validation if necessary
    // Here, you can add code to send the auction details to a smart contract
    // and initiate the auction process
    console.log("Auction created:", {
      name: auctionName,
      description: auctionDescription,
      startingPrice: auctionStartingPrice,
      duration: auctionDuration,
      endTime: auctionEndTime,
    });
    // Reset the form fields after creating the auction
    setAuctionName("");
    setAuctionDescription("");
    setAuctionStartingPrice(0);
    setAuctionDuration(0);
    setAuctionEndTime(null);
  };

  const handleAuctionNameChange = (event) => {
    setAuctionName(event.target.value);
  };

  const handleAuctionDescriptionChange = (event) => {
    setAuctionDescription(event.target.value);
  };

  const handleAuctionStartingPriceChange = (event) => {
    setAuctionStartingPrice(parseFloat(event.target.value));
  };

  const handleAuctionDurationChange = (event) => {
    setAuctionDuration(parseInt(event.target.value));
    const now = new Date();
    const endTime = new Date(now.getTime() + parseInt(event.target.value) * 60000);
    setAuctionEndTime(endTime);
  };

  return (
    <div className="auction-page-container">
      <h2>Create New Auction</h2>
      <div className="button-wrapper">
        <button onClick={() => window.history.back()} className="back-button">Back</button>
      </div>
      <form className="auction-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="auctionName">Auction Name:</label>
          <input
            type="text"
            id="auctionName"
            value={auctionName}
            onChange={handleAuctionNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="auctionDescription">Description:</label>
          <textarea
            id="auctionDescription"
            value={auctionDescription}
            onChange={handleAuctionDescriptionChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="auctionStartingPrice">Starting Price (ETH):</label>
          <input
            type="number"
            step="0.01"
            id="auctionStartingPrice"
            value={auctionStartingPrice}
            onChange={handleAuctionStartingPriceChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="auctionDuration">Auction Duration (minutes):</label>
          <input
            type="number"
            step="1"
            id="auctionDuration"
            value={auctionDuration}
            onChange={handleAuctionDurationChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="auctionEndTime">Auction End Time:</label>
          <input
            type="text"
            id="auctionEndTime"
            value={auctionEndTime ? auctionEndTime.toLocaleString() : ""}
            readOnly
          />
        </div>
        <div className="button-wrapper"><button type="submit" onClick={createAuction}>Create Auction</button></div>
        
      </form>
    </div>
  );
};

export default AuctionPage;
