import React from "react";
import RecommendationCard from "./RecommendationCard";
import "./FreshRecommendations.css";

const recommendations = [
  {
    id: 1,
    image: "https://th.bing.com/th/id/OIP.O8K-Ao4-G6lz41qibr24EgHaFk?w=194&h=180&c=7&r=0&o=5&pid=1.7",
    price: "14,500",
    title: "2 Bds • 2 Ba • 900 ft²",
    location: "Makhmalabad, Nashik",
    date: "3 days ago",
    featured: true,
  },
  {
    id: 2,
    image: "https://th.bing.com/th/id/OIP.1CVI0o-0ybnNRMgRxdgSVwHaFj?w=159&h=180&c=7&r=0&o=5&pid=1.7",
    price: "2,500",
    title: "Willys steering wheel jeep spare parts",
    location: "Marathwada Chowk, Balapur",
    date: "Jan 27",
    featured: true,
  },
  {
    id: 3,
    image: "data:image/jpeg;base64,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",
    price: "349",
    title: "All types of brand new Bluetooth speakers",
    location: "Samudrapur, Maharashtra",
    date: "2 days ago",
    featured: false,
  },
  {
    id: 4,
    image: "https://th.bing.com/th/id/OIP.8tw0X7PsVznuLroNIO7IWwHaEK?w=276&h=180&c=7&r=0&o=5&pid=1.7" ,
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
        {recommendations.map((item, index) => (
          <RecommendationCard key={item.id} item={item} showBorder={index < 2} />
        ))}
      </div>
    </div>
  );
};

export default FreshRecommendations;