import React, { useState, useEffect } from 'react';
import apiService from '../apiService';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiService.fetchUsers();
        setUsers(response.data);
      } catch (error) {
        console.error(error); // Handle error
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.Id}>
            <p><strong>ID:</strong> {user.Id}</p>
            <p><strong>Nombre:</strong> {user.Nombre}</p>
            <p><strong>Apellido:</strong> {user.Apellido}</p>
            <p><strong>Email:</strong> {user.Email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
