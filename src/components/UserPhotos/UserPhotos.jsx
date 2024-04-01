import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const { albumId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, [albumId]);

  return (
    <div>
      <h1>Photo List</h1>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserPhotos;
