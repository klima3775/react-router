import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { apiResponse } from "../../utils/apiResponse";

function UserAlbums() {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    apiResponse(
      `https://jsonplaceholder.typicode.com/albums?userId=${userId}`,
      setAlbums
    );
    apiResponse(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      setUser
    );
  }, [userId]);

  return (
    <div className="wrapper">
      <div className="albums">
        <h2>Альбоми користувача {user ? user.name : "Loading..."}</h2>

        <ul>
          {albums.map((album) => (
            <li key={album.id}>
              <p>{album.title}</p>
              <Link to={`/users/${userId}/albums/${album.id}/photos`}>
                <button>Зображення альбому</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserAlbums;
