import React, { useState, useEffect } from "react";
import GalleryList from "../GalleryList/GalleryList.jsx";
import axios from "axios";
// import "./App.css";

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
    axios.get("/api/gallery")
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
    <div className="app">
      <header>
        <h1>TY's React Gallery</h1>
      </header>
      <p>TY's gallery of cute baby animals</p>
      {/* GalleryList component with galleryList prop */}
      <GalleryList galleryList={galleryList} />
    </div>
  );
}

export default App;
