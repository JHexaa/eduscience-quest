import React from 'react'
import Navbar from '../Components/Navbar'
import apiService from '../apiService';
import { useNavigate } from 'react-router-dom';

const CRUD = () => {

    return (
        <>
            <Navbar />
            <div className="cuerpo h-screen">
                <div class="container-users"> 
                    <div class="users-content">
                        <div class="container-container-user">
                            <h2>Usuarios Registrados</h2>
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
                                    <tbody id="userList">
                                    </tbody>
                                </table>
                        </div> 
                        <div class="container-container-edit">
                            <h2>Editar Usuario</h2>
                            <form class="editForm" id="editForm">
                                <p id="userId">ID: </p>
                                <input type="hidden" id="id" />
                                <input type="text" id="nombre" placeholder="Nombre" required />
                                <input type="text" id="apellido" placeholder="Apellido" required />
                                <input type="email" id="email" placeholder="Correo Electronico" required />
                                <button type="submit">Actualizar Datos</button>
                            </form>
                            <p class="edit-response" id="response"></p> 
                        </div>   
                    </div> 
                </div>
            </div>
        </>
    )
}
export default CRUD