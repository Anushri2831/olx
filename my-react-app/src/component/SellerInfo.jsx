import React from "react";
import "./SellerInfo.css";

const SellerInfo = () => {
  return (
    <div className="seller-info">
      <div className="seller-card">
        <img src="/images/profile.png" alt="Seller" />
        <h4>Vaishali</h4>
        <button>Chat with Seller</button>
      </div>
      <p>Posted in Makhamalabad, Nashik</p>
    </div>
  );
};

export default SellerInfo;