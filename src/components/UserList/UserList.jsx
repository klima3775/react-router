import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
export default UserList;
