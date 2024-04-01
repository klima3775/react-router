// import "./App.css";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
// import UserList from "./components/UserList/UserList";
// import UserAlbum from "./components/UserAlbum/UserAlbum";
// import UserPhotos from "./components/UserPhotos/UserPhotos";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/users" element={<UserList />} />
//         <Route path="/users/:userId/albums" element={<UserAlbum />} />
//         <Route
//           path="/users/:userId/albums/:albumId/photos"
//           element={<UserPhotos />}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <Link to={`/albums/${user.id}`}>Album</Link>
        </div>
      ))}
    </div>
  );
}

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

function UserPhotos() {
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
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/albums/:userId" element={<UserAlbum />} />
        <Route path="/photos/:albumId" element={<UserPhotos />} />
      </Routes>
    </Router>
  );
}

export default App;
