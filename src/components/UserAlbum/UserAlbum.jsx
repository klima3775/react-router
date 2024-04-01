import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function UserAlbum() {
  const [albums, setAlbums] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, [userId]);

  return (
    <div>
      {albums.map((album) => (
        <div key={album.id}>
          <h2>{album.title}</h2>
          <Link to={`/photos/${album.id}`}>Photos</Link>
        </div>
      ))}
    </div>
  );
}
export default UserAlbum;
