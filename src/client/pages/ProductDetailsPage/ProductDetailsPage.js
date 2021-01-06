import React, { Component } from 'react';
import {fetchProductById} from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

class ProductDetailsPage extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchProductById(id);
    }


    render() {
        const { product } = this.props;
        return (
            <div className="center-align" style={{ marginTop: '20px' }}>
                <h3>Product details page </h3>
                <button onClick={() => this.props.history.push('/products')}>Go back</button>
                {
                    product ? (
                        <div>
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>
                        </div>
                    ) : (
                           <div>Loading...</div>
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
    component: connect(mapStateToProps, { fetchProductById })(withRouter(ProductDetailsPage)),
    loadData
};