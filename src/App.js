import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserList from "./components/UserList/UserList";
import UserAlbums from "./components/UserAlbums/UserAlbums";
import UserPhotos from "./components/UserPhotos/UserPhotos";

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/users" element={<UserList />}></Route>
        <Route path="/users/:userId/albums" element={<UserAlbums />}></Route>
        <Route
          path="/users/:userId/albums/:albumId/photos"
          element={<UserPhotos />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
