import React from 'react';
import { NavLink, Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="ibero.png" alt="IBERO" width="95" height="39"></img>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className='nav-link' to="/">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to="/tareas">Tareas Redes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to="/laboratorio">Laboratorio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to="/proyecto-final">Proyecto final</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;