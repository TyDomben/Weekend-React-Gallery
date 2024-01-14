// TODO : Create a GalleryItem component that:
// Will be used to display a single gallery item.
// Expects to receive a single gallery item object as a prop. (These will be rendered inside the GalleryList's .map.)
// Toggles between showing the image and description on click. Use conditional rendering.
// Displays a gallery item's current number likes.
// Contains a "like" button that, when clicked, will fire off a PUT /api/gallery/like/:id request.

import React, { useState } from "react";
import axios from "axios";

// import axios from "axios";
// import "./GalleryItem.css";

// GalleryItem component

const GalleryItem = ({ galleryItem }) => {
  // GalleryItem takes in galleryItem prop
  const [isExpanded, setIsExpanded] = useState(false);
  const [likes, setLikes] = useState(galleryItem.likes);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLike = () => {
    axios
      .put(`/api/gallery/like/${galleryItem.id}`)

      .then((response) => {
        if (response.status === 200) {
          setLikes(likes + 1);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div data-testid="galleryItem">
      <img
        src={galleryItem.url}
        alt={galleryItem.title}
        style={{ width: "100px", height: "100px" }}
        onClick={toggleExpand}
      />
      {isExpanded && (
        <div>
          <p data-testid="description">{galleryItem.description}</p>
          <p>Likes: {likes}</p>
          <button onClick={handleLike}>Like</button>
          <Link to={`/gallery/${galleryItem.id}`}>View Details</Link>
        </div>
      )}
    </div>
  );
};

export default GalleryItem;
