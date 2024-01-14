import React, { useState, useEffect } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
import axios from "axios";
// import "./GalleryList.css";

const GalleryList = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    console.log("GalleryList useEffect");
    axios
      .get("/api/gallery")
      .then((response) => {
        setGalleryItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching gallery data:", error);
      });
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
