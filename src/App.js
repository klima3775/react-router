import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserList from "./components/UserList/UserList";
import UserAlbum from "./components/UserAlbum/UserAlbum";
import UserPhotos from "./components/UserPhotos/UserPhotos";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Users</Link>
          </li>
          <li>
            <Link to="/albums">Albums</Link>
          </li>
          <li>
            <Link to="/photos">Photos</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/albums/:userId" element={<UserAlbum />} />
        <Route path="/photos/:albumId" element={<UserPhotos />} />
      </Routes>
    </Router>
  );
}

export default App;
