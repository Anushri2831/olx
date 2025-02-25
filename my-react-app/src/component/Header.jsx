import React from "react";
import "./Header.css";
import {FaSearch} from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { AiOutlineCaretDown, AiOutlineHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import  {IoNotificationsOutline} from "react-icons/io5";

const Header = () => {
  return (
<header>
    <div className="olx-header">
      {/* Logo */}
      <div className="olx-logo">
        <img src="data:image/jpeg;base64,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" height="50px" width="40px"></img>
      </div>

      {/* Location Dropdown */}
      <div className="search-box">
      <div className="dropdown">
        <button className="dropdown-btn"><FaSearch /></button>
      </div>
      <input type="text" placeholder="India" className="search-input" />
      <button className="search-btn"> <FaCaretDown /></button>
        
      
      </div>

      {/* Search Bar */}
      <div className="search-container">
       <input type="text" placeholder='Search  "Properties"  '  ></input>
       <button className="search"><FaSearch size={20} color="white"/></button>
      </div>

      {/* Language Dropdown */}
      <div className="language-dropdown">
        <p style={{top:"10px" , fontFamily:"sans-serif"}}>ENGLISH <FaCaretDown  size={20}/></p>
      </div>

      {/* Icons */}
      <div className="header-icons">
        <span><AiOutlineHeart size={25} /></span>
        <span><FaComment size={25} /></span>
        <span><IoNotificationsOutline size={25} /></span>
      
      </div>

      <div className="top">
        <img src="https://th.bing.com/th/id/OIP.ePTBsw0y7DRxaM6p0bw1HQHaHa?w=207&h=207&c=7&r=0&o=5&pid=1.7" height="35px" width="50px"/>
         <FaCaretDown size={28} />
      </div>

      {/* Sell Button */}
      <button className="sell-button">+ SELL</button>
      </div> 


      <div className="bottom">
      <div className="category">
        <span>All Categories <FaCaretDown /></span>
      



      <div className="header2" style={{display:"flex", gap:"30px"}}>
        <span>Car</span><span>Motorcycles</span><span>Mobile Phones</span><span>For Sale:Houses & Apartments</span> <span> Scooters</span><span>Commercial & Other Vehicles </span> <span>For Rent:Houses & Apartments</span>
      </div>
      </div>

      </div>
     



      
   
    </header>

  
    
    
  );
};

export default Header;