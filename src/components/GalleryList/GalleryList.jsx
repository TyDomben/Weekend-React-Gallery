import React, { useState, useEffect } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
import axios from "axios";
// import "./GalleryList.css";
//
// Define the GalleryList component
const GalleryList = () => {
  // State to store gallery items
  const [galleryItems, setGalleryItems] = useState([]);

  // useEffect hook to fetch gallery data on component mount
  useEffect(() => {
    // Log to see when this effect runs
    console.log("GalleryList useEffect");

    // Fetch gallery data from the server
    axios
      .get("/api/gallery")
      .then((response) => {
        // Update state with the fetched data
        setGalleryItems(response.data);
      })
      .catch((error) => {
        // Log errors, if any
        console.error("Error fetching gallery data:", error);
      });
  }, []); // Empty dependency array means this runs once on mount

  // Render the GalleryList component
  return (
    <div data-testid="galleryList">
      {/* Map over galleryItems to render each GalleryItem */}
      {galleryItems.map((galleryItem) => (
        <GalleryItem key={galleryItem.id} galleryItem={galleryItem} />
      ))}
    </div>
  );
};

export default GalleryList; // Export the component for use elsewhere
