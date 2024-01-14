// basic page layout imports at the top, then function, then const, Return and export at the bottom
import React from "react";
import { useState, useEffect } from "react";
// import GalleryList from "../GalleryList/GalleryList.jsx";
// import GalleryItem from "../GalleryItem/GalleryItem.jsx";
import axios from "axios";
import "./App.css";

// App.jsx
function App() {
  const [galleryList, setGalleryList] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  
  // useEffect on page load
  useEffect(() => {
    console.log("in useEffect");
    fetchGallery();
  }, []);
  // fetchGallery function
  const fetchGallery = () => {
    axios
      .get("/gallery")
      .then((response) => {
        console.log("response from server", response.data);
        setGalleryList(response.data);
      })
      .catch((error) => {
        console.log("error getting gallery", error);
      });
  };
  // return
  return (
    <div>
      <header>
        <h1>React Gallery</h1>
      </header>
      <p>A gallery of cute baby animals</p>
      {/* <GalleryList component/> */}
      {/* <GalleryList galleryList={galleryList} /> */}
      {/* <GalleryItem component/> */}
      {/* <GalleryItem /> */}
      {/* <GalleryItem /> */}
    </div>
  );
}

export default App;
