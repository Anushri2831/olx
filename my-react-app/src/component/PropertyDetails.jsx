import React from "react";
import "./PropertyDetails.css";

const PropertyDetails = () => {
  return (
    <div className="property-details">
      <h2>₹ 14,500</h2>
      <p>2 Bds • 2 Ba • 900 ft²</p>
      <p>Makhamalabad, Nashik 422004</p>

      <table className="details-table">
        <tbody>
          <tr><td>Type</td><td>Flats / Apartments</td></tr>
          <tr><td>Super Built-up area</td><td>900 sqft</td></tr>
          <tr><td>Furnishing</td><td>Semi Furnished</td></tr>
          <tr><td>Bedrooms</td><td>2</td></tr>
          <tr><td>Bathrooms</td><td>2</td></tr>
          <tr><td>Facing</td><td>East</td></tr>
          <tr><td>Car Parking</td><td>1</td></tr>
          <tr><td>Floor No</td><td>1</td></tr>
        </tbody>
      </table>

      <h3>Description</h3>
      <p>2BHK flat for rent in Makhamalabad with 2 bathrooms, gallery, and parking. Rent: ₹14,500. Deposit: ₹40,000. Maintenance: ₹500.</p>
    </div>
  );
};

export default PropertyDetails;