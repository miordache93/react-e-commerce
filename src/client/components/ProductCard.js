import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <h1>{product.name}</h1>
            <Link to={`/product/${product.id}`}>View product details </Link>
            <a>
                Add to cart
            </a>
        </div>
    );
}

export default ProductCard;
