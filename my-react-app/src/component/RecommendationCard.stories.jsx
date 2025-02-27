import React from "react";
import RecommendationCard from "./RecommendationCard";

export default {
  title: "component/RecommendationCard",
  component: RecommendationCard,
};

const Template = (args) => <RecommendationCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: {
    image: "house.jpg",
    price: "14,500",
    title: "2 Bds • 2 Ba • 900 ft²",
    location: "Makhmalabad, Nashik",
    date: "3 days ago",
    featured: true,
  },
};