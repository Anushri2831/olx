import React from "react";
import "./RecommendationCard.css";

const RecommendationCard = ({ item , showBorder}) => {
  return (
    <div className={`recommendation-card ${showBorder ? "has-border" : " "}`}>
      <div className="image-container">
        <img src={item.image} alt={item.title} />
        <button className="wishlist-btn">❤</button>
        </div>
        <div className="card-content">
          <div className="left-border"></div>
            <div className="content-wrapper">
            {item.featured && <span className="featured-tag">FEATURED</span>}
            
          
       
        
      </div>
      <div className="card-content">
        <h3 className="price">₹ {item.price}</h3>
        <p className="title">{item.title}</p>
        <p className="location">{item.location}</p>
        <p className="date">{item.date}</p>
      </div>
    </div>
    </div>
  );
};

export default RecommendationCard;