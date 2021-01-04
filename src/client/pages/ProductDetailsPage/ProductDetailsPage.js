import React, { Component } from 'react';
import {fetchProductById} from '../../actions';
import { connect } from 'react-redux';
import { BrowserHistory } from 'react-router';

class ProductDetailsPage extends Component {
    
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchProductById(id);
    }


    handleBack() {
        BrowserHistory.goBack();
    }

    render() {
        const { product } = this.props;
        return (
            <div className="center-align" style={{ marginTop: '20px' }}>
                <h3>Product details page </h3>
                <button onClick={() => this.handleBack}>Go back</button>
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
    component: connect(mapStateToProps, { fetchProductById })(ProductDetailsPage),
    loadData
};