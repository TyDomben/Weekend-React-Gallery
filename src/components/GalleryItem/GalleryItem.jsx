import React, { useState } from "react";
import axios from "axios";
// import "./GalleryItem.css"; 

// Defines a component to display a single item in the gallery.
const GalleryItem = ({ galleryItem }) => {
  // State to track if the item's description is shown or hidden.
  const [isExpanded, setIsExpanded] = useState(false);

  // State to track the number of likes for the item.
  const [likes, setLikes] = useState(galleryItem.likes);

  // Function to toggle the expanded state, showing or hiding the description.
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to handle 'like' button click.
  const handleLike = () => {
    // Send a PUT request to increment likes for the item.
    axios
      // .put localhost:5001/api/gallery/like/
      .put(`/api/gallery/like/${galleryItem.id}`)
      .then((response) => {
        // If the request is successful, increment the likes count in the state.
        if (response.status === 200) {
          setLikes(likes + 1);
        }
      })
      .catch((error) => {
        // Log any error encountered during the request.
        console.error("Error updating likes:", error);
      });
  };

  // Render the gallery item.
  return (
    <div data-testid="galleryItem">
      {/* Image of the gallery item */}
      <img
        src={galleryItem.url}
        alt={galleryItem.title}
        style={{ width: "100px", height: "100px" }}
        onClick={toggleExpand}
      />
      {/* Conditionally render the description and like button when expanded */}
      {isExpanded && (
        <div>
          <p data-testid="description">{galleryItem.description}</p>
          <p>Likes: {likes}</p>
          <button onClick={handleLike}>Like</button>
          {/* Link to a detailed view of the item (not implemented yet) */}
          {/* <Link to={`/gallery/${galleryItem.id}`}>View Details</Link> */}
        </div>
      )}
    </div>
  );
};

export default GalleryItem;
