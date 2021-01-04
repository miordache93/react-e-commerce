import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions';
import requireAuth from '../../components/hocs/requireAuth';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductsFilter from '../../components/ProductsFilter/ProductsFilter';
// import styles from '../ProductsPage/ProductsPage.css';

class ProductsPage extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        if (this.props.products.length > 0) {
            return (
                <div>
                    <div>
                        <ProductsFilter />
                    </div>
                    <div>
                        {this.props.products.map(prod => {
                            return (
                                <ProductCard key={prod.id} product={prod} />
                            )
                        })
                        }
                    </div>
                </div>
            )
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