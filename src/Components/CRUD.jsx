import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import apiService from '../apiService';
import { useNavigate } from 'react-router-dom';

const CRUD = () => {
    const [users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState({ id: '', nombre: '', apellido: '', email: '' });
    const [responseMessage, setResponseMessage] = useState('');
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await apiService.fetchUsers();
            const sortedUsers = response.data.sort((a, b) => a.Id - b.Id);
            setUsers(sortedUsers);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleEditUser = async (id) => {
        try {
            const response = await apiService.getUser(id);
            setEditUser({
                id: response.data.Id,
                nombre: response.data.Nombre,
                apellido: response.data.Apellido,
                email: response.data.Email
            });
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    const handleUpdateUser = async (event) => {
        event.preventDefault();
        try {
            const response = await apiService.updateUser(editUser.id, {
                nombre: editUser.nombre,
                apellido: editUser.apellido,
                email: editUser.email,
            });
            setResponseMessage(response.data.message);
            setEditUser({ id: '', nombre: '', apellido: '', email: '' });
            fetchUsers();
            setTimeout(() => setResponseMessage(''), 3000);
        } catch (error) {
            setResponseMessage('Error: ' + error.message);
            setTimeout(() => setResponseMessage(''), 3000);
        }
    };

    const handleDeleteUser = async (id) => {
        try {
            const response = await apiService.deleteUser(id);
            setResponseMessage(response.data.message);
            fetchUsers();
            setTimeout(() => setResponseMessage(''), 3000);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    useEffect(() => {
        const userID = sessionStorage.getItem('userID');
        const userNombre = sessionStorage.getItem('userNombre');
        const userApellido = sessionStorage.getItem('userApellido');
        const userTipo = sessionStorage.getItem('userTipo');
        if (!userID) {
            navigate('/login');
        } else if (userTipo !== 'Admin') {
            navigate('/principal')
        } else {
            setUser({ nombre: userNombre, apellido: userApellido });
        }
    }, [navigate]);

    if (!user) {
        return null;
    }

    const cerrarSesion = () => {
        sessionStorage.removeItem('userID');
        navigate('/login');
    }

    return (
        <>
            <Navbar />
            <div className="cuerpo h-screen flex items-center justify-center align-center px-20 py-10">
                <div className="container-users">
                    <h1 className="text-4xl text-white ">BIENVENIDO, {user.nombre.toUpperCase()}</h1>
                    <button
                        onClick={() => cerrarSesion()}
                        className="absolute text-l top-56 right-44 px-8 rounded-xl py-4 bg-red-600 text-white hover:bg-red-900"
                    > CERRAR SESION </button>
                    <div className="users-content">
                        <div className="container-container-user">
                            <h2 className="text-3xl">Usuarios Registrados</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Email</th>
                                        <th>Accion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user.Id}>
                                            <td>{user.Id}</td>
                                            <td>{user.Nombre}</td>
                                            <td>{user.Apellido}</td>
                                            <td>{user.Email}</td>
                                            <td>
                                                <div className="flex gap-4 justify-center align-center items-center">
                                                    <button className="edit" onClick={() => handleEditUser(user.Id)}>editar</button>
                                                    <button className="delete" onClick={() => handleDeleteUser(user.Id)}>borrar</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="container-container-edit">
                            <h2>Editar Usuario</h2>
                            <p>ID: {editUser.id}</p>
                            <form className="editForm" onSubmit={handleUpdateUser}>
                                <input type="hidden" name="id" value={editUser.id} />
                                <input
                                    type="text"
                                    name="nombre"
                                    value={editUser.nombre}
                                    placeholder="Nombre"
                                    required
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    name="apellido"
                                    value={editUser.apellido}
                                    placeholder="Apellido"
                                    required
                                    onChange={handleChange}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={editUser.email}
                                    placeholder="Correo Electronico"
                                    required
                                    onChange={handleChange}
                                />
                                <button type="submit">Actualizar Datos</button>
                            </form>
                            <p className="edit-response">{responseMessage}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CRUD;
