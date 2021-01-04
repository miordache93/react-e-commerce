import React from 'react';
import { Link } from 'react-router-dom';
import { ADD_PROD_TO_CART } from '../../actions/index';
import { connect } from 'react-redux';

const productCartStyles = {
    border: '1px solid black',
    padding: '5px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    margin: '10px 15px',
    display: 'flex',
    flexDirection: 'column',
    width: '20%'
};

const producCardActionsStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    margin: 'auto',
    padding: '5px'
};

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
        <div styles={productCartStyles}>
            <h6>{props.product.name}</h6>
            <div styles={producCardActionsStyles}>
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
