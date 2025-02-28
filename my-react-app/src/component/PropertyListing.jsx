import React from "react";
import ImageGallery from "./ImageGallery";
import PropertyDetails from "./PropertyDetails";
import SellerInfo from "./SellerInfo";
import "./PropertyListing.css";

const PropertyListing = () => {
  return (
    <div className="property-listing">
      <div className="property-main">
        <ImageGallery />
        <PropertyDetails />
      </div>
      <SellerInfo />
    </div>
  );
};

export default PropertyListing;