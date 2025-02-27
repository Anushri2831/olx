import React from "react";
import RecommendationCard from "./RecommendationCard";
import "./FreshRecommendations.css";

const recommendations = [
  {
    id: 1,
    image: "",
    price: "14,500",
    title: "2 Bds • 2 Ba • 900 ft²",
    location: "Makhmalabad, Nashik",
    date: "3 days ago",
    featured: true,
  },
  {
    id: 2,
    image: "steering-wheel.jpg",
    price: "2,500",
    title: "Willys steering wheel jeep spare parts",
    location: "Marathwada Chowk, Balapur",
    date: "Jan 27",
    featured: true,
  },
  {
    id: 3,
    image: "bluetooth-speaker.jpg",
    price: "349",
    title: "All types of brand new Bluetooth speakers",
    location: "Samudrapur, Maharashtra",
    date: "2 days ago",
    featured: false,
  },
  {
    id: 4,
    image: "samsung-phone.jpg",
    price: "30,000",
    title: "Selling my 6-month-old Samsung",
    location: "Samudrapur MIDC, Maharashtra",
    date: "5 days ago",
    featured: false,
  },
];

const FreshRecommendations = () => {
  return (
    <div className="fresh-recommendations">
      <h2>Fresh recommendations</h2>
      <div className="recommendations-list">
        {recommendations.map((item) => (
          <RecommendationCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FreshRecommendations;