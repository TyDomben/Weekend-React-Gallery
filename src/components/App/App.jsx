import React, { useState, useEffect } from "react";
import GalleryList from "../GalleryList/GalleryList.jsx";
import axios from "axios";
import "./App.css";

// App component
function App() {
  // State for storing gallery items
  const [galleryList, setGalleryList] = useState([]);

  // Fetch gallery data when the component mounts
  useEffect(() => {
    fetchGallery();
  }, []);

  // Function to fetch gallery data from the server
  const fetchGallery = () => {
    axios
      .get("/api/gallery")
      .then((response) => {
        // Update state with the fetched data
        setGalleryList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching gallery data:", error);
      });
  };

  // Render the component
  return (
    // GalleryApp
    <div className="GalleryApp" data-testid="app">

      <header>
        {/* header */}
        <h1 className="header">TY's React Gallery</h1>
      </header>
      {/* main content */}
      <div className="main-content">
        {/* gallery description */}
        <p className="galleryDescription">TY's gallery of cute baby animals</p>
        {/* gallery list */}
        <GalleryList className="gallery-list" galleryList={galleryList} />
      </div>
      {/* footer */}
      <footer className="footer">
        <p>Copyright 2024</p>
      </footer>
    </div>
  );
}

export default App;
