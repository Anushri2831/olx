import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="olx-header">
      {/* Logo */}
      <div className="olx-logo">OLX</div>

      {/* Location Dropdown */}
      <div className="location-dropdown">
        <select>
          <option>India</option>
        </select>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <select className="category-dropdown">
          <option>All Categories</option>
        </select>
        <input type="text" placeholder='Search "Properties"' />
        <button className="search-button">🔍</button>
      </div>

      {/* Language Dropdown */}
      <div className="language-dropdown">
        <select>
          <option>ENGLISH</option>
        </select>
      </div>

      {/* Icons */}
      <div className="header-icons">
        <span>♡</span>
        <span>💬</span>
        <span>🔔</span>
        <span className="profile-icon">👤</span>
      </div>

      {/* Sell Button */}
      <button className="sell-button">+ SELL</button>
    </header>
  );
};

export default Header;