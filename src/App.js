import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import UserList from "./components/UserList/UserList";
import UserAlbum from "./components/UserAlbum/UserAlbum";
import UserPhotos from "./components/UserPhotos/UserPhotos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:userId" element={<UserAlbum />} />
        <Route path="/albums/:albumId" element={<UserPhotos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
