import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import staticUsers from '../../../data/users';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(staticUsers);
  }, []);

  return (
    <ul className="list-group">
      {users.map((user) => (
        <Link key={user.id} className="list-group-item list-group-item-action" to={`/users/${user.id}`}>{user.name}</Link>
      ))}
    </ul>
  )
}

export default UserList