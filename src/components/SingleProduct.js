import React from 'react';
import '../css/SingleProducto.css'

const SingleProduct = ({ product }) => {
    
    const { descripcion, imagen, nombre, precio } = product
    if (!imagen) return null;


    return (
        <div className="info-producto">
            <div className="imagen">
                <img src={`/assets/${imagen}.png`} alt={nombre} />
            </div>
            <div className="info">
                <h2>{nombre}</h2>
                <p className="precio">$ {precio}</p>
                <p>{descripcion}</p>
            </div>
        </div>
    );
}

export default SingleProduct;