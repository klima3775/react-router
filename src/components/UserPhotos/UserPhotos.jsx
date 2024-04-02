import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiResponse } from "../../utils/apiResponse";

function UserPhotos() {
  const { userId, albumId } = useParams();
  const [photos, setPhotos] = useState([]);
  const [album, setAlbum] = useState();

  useEffect(() => {
    apiResponse(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
      setPhotos
    );
    apiResponse(
      `https://jsonplaceholder.typicode.com/albums/${albumId}`,
      setAlbum
    );
  }, [albumId]);

  return (
    <div className="wrapper">
      <div className="photos">
        <h2>Зображення альбому {album ? album.title : "Loading..."}</h2>

        <ul>
          {photos.map((photo) => (
            <li key={photo.id}>
              <img src={photo.thumbnailUrl} alt=""></img>
              <p>title: "{photo.title}"</p>

              <Link to={`/users/${userId}/albums/${albumId}/photos`}></Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserPhotos;
