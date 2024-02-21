import React from 'react';
import { Link } from 'react-router-dom';

const AuctionButton = ({ user }) => {
  return user === 'org1 seller' ? (
    <Link to="/auction">
      <div className="button-wrapper">
        <button>Create Auction</button>
      </div>
    </Link>
  ) : (
    <button>Bid on Auction</button>
  );
};

export default AuctionButton;
