import React from "react";
import "./RecommendationCard.css";

const RecommendationCard = ({ item }) => {
  return (
    <div className="recommendation-card">
      <div className="image-container">
        <img src={item.image} alt={item.title} />
        {item.featured && <span className="featured-tag">FEATURED</span>}
        <button className="wishlist-btn">❤</button>
      </div>
      <div className="card-content">
        <h3 className="price">₹ {item.price}</h3>
        <p className="title">{item.title}</p>
        <p className="location">{item.location}</p>
        <p className="date">{item.date}</p>
      </div>
    </div>
  );
};

export default RecommendationCard;