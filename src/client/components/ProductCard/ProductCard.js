import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.css';
import { ADD_PROD_TO_CART } from '../../actions/index';
import { connect } from 'react-redux';

const ProductCard = (props) => {

    const addToCart = (ev, prod) => {
        let cartItems = JSON.parse(window.localStorage.getItem('cartItems')) || [];
        if (!cartItems.find(product => prod.id === product.id)) {
            cartItems.push(prod);
            props.addProdToCart(prod);
        } else {
            alert('Product already in cart');
        }

        window.localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };

    return (
        <div className={styles.productCard}>
            <h6>{props.product.name}</h6>
            <div className={styles['productCard-actions']}>
                <button onClick={(ev) => addToCart(ev, props.product)}>Add to cart</button>
                <Link to={`/product/${props.product.id}`}>View product </Link>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addProdToCart: product => {
        dispatch({
            type: ADD_PROD_TO_CART,
            payload: {
                data: product
            }
        });
    }
});

export default connect(null, mapDispatchToProps)(ProductCard);
