import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';
import requireAuth from '../components/hocs/requireAuth';
import { Link } from 'react-router-dom';

class ProductsPage extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    renderProducts() {
        return this.props.products.map(prod => {
            return (
                <li key={prod.id}>
                    <Link to={`/product/${prod.id}`}>{prod.name} </Link>
                </li>
            )
        });
    }

    render() {
      if (this.props.products.length > 0) {
          return this.renderProducts();
      } else {
          return <p>Loading...</p>;
      }
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    };
};

function loadData(store) {
    return store.dispatch(fetchProducts());
}

export default {
    component: connect(mapStateToProps, { fetchProducts })(requireAuth(ProductsPage)),
    loadData
}