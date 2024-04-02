import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiResponse } from "../../utils/apiResponse";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    apiResponse("https://jsonplaceholder.typicode.com/users", setUsers);
  }, []);

  return (
    <div className="wrapper">
      <div className="users">
        <h2>Список користувачів</h2>

        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <h3>{user.name}</h3>
              <Link to={`/users/${user.id}/albums`}>
                <button>Альбоми користувача</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default UserList;
