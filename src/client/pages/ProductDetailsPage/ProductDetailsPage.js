import React, { Component } from 'react';
import {fetchProductById} from '../../actions';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


class ProductDetailsPage extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        if (id) {
            this.props.fetchProductById(id);
        }
    }

    render() {
        const { product } = this.props;
        return (
            <div className="center-align" style={{ martingTop: '20px' }}>
                <h3>Product details page </h3>
                {
                    product ? (
                        <div>
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>
                        </div>
                    ) : (
                            <Redirect to="/products" />
                        )
                }
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        product: state.selectedProduct
    };
};

function loadData(store) {
    return store.dispatch(fetchProductById());
}

export default {
    component: connect(mapStateToProps, { fetchProductById })(ProductDetailsPage),
    loadData
};