import React from 'react';
import '../css/Navegacion.css'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return ( 
        <nav className="navegacion">
            <NavLink to ={'/us'} activeClassName="activo">Nosotros</NavLink>
            <NavLink to ={'/products'} activeClassName="activo">Productos</NavLink>
            <NavLink to ={'/contact'} activeClassName="activo">Contacto</NavLink>
        </nav>
     );
}
 
export default Nav;