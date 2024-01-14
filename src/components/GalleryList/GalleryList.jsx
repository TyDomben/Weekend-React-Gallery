// TODO Create a GalleryList component that:
// When it loads, obtains the array of gallery item objects from GET /api/gallery, then stores it in a piece of React state.
// In its return statement, .maps through the array of gallery item objects that are stored in React state to display each gallery item.
// Uses the GalleryItem component to display each gallery item.

import React, { useState, useEffect } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
// import axios from "axios";
// import "./GalleryList.css";

// GalleryList component
const GalleryList = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    fetch("/api/gallery")
      .then((response) => response.json())
      .then((data) => setGalleryItems(data));
  }, []);

  return (
    <div data-testid="galleryList">
      {galleryItems.map((galleryItem) => (
        <GalleryItem key={galleryItem.id} galleryItem={galleryItem} />
      ))}
    </div>
  );
};

export default GalleryList;