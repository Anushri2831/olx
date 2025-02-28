import React, { useState } from "react";
import "./ImageGallery.css";

const images = [
  "/images/property1.jpg",
  "/images/property2.jpg",
  "/images/property3.jpg",
];

const ImageGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="image-gallery">
      <button className="prev-btn" onClick={handlePrev}>&lt;</button>
      <img src={images[currentImage]} alt="Property" />
      <button className="next-btn" onClick={handleNext}>&gt;</button>
      <div className="thumbnails">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={index === currentImage ? "active" : ""}
            onClick={() => setCurrentImage(index)}
            alt="Thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;