import React, { Component } from 'react'
import Product from './Product';
import '../css/Producto.css';


class Products extends Component {

    render() {
        return (
            <div className="productos">
                <h2>Nuestros Productos</h2>
                <ul className="lista-productos">
                    {Object.keys(this.props.products).map(product => (
                        <Product
                            product={this.props.products[product]}
                            key={product}
                        />
                    ))}
                </ul>


            </div>
        );
    }
}

export default Products;