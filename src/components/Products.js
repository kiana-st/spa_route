import React, { Component } from 'react';
import { Link } from 'react-router-dom';



// parametrha in routing like /:id

class Products extends Component {
    render() {
        return (
            <div>
                <h1>Products</h1>
                <ul>
                    <li><Link to="/products/1">products 1</Link></li>
                    <li><Link to="/products/2">products 2</Link></li>
                    <li><Link to="/products/3">products 3</Link></li>
                    <li><Link to="/products/4">products 4</Link></li>

                </ul>
            </div>
        );
    }
}

export default Products;