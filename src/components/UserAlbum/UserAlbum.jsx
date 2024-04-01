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
      <h1>Albums</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            {album.title}
            <Link>
              <button>Photos</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UserAlbum;
