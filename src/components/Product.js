import React, { Component } from 'react'
import { Link } from 'react-router-dom';




const Product = ({product}) => {
    const {imagen,id, nombre, precio} = product
    return ( 
        <li>
            <img src={`assets/${imagen}.png`} alt={id}/>
           <p> {nombre} <span>$ {precio}</span></p>
           <Link to={`/producto/${id}`}>Más Información</Link>
        </li>
     );
}
 
export default Product;