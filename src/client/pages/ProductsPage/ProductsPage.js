import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchProducts } from '../../actions';
import requireAuth from '../../components/hocs/requireAuth';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductsFilter from '../../components/ProductsFilter/ProductsFilter';
import { FILTER_PRODUCTS } from '../../actions';
import { bindActionCreators } from 'redux'
import { urlParser } from './../../../helpers/urlParser';

class ProductsPage extends Component {
    componentDidMount() {
        this.props.filterProducts(this.setQueryParams());
        // this.props.fetchProducts(this.setQueryParams());
    }

    componentDidUpdate(prevProps) {
        if (this.props.filters !== prevProps.filters) {
            this.props.fetchProducts(this.setQueryParams());
        }
    }

    setQueryParams() {
        const { location } = this.props;
        const params = new URLSearchParams(location.search);
        const queryParams = {
            search: params.get('search'),
            count: params.get('count'),
            page: params.get('page')
        };

        return queryParams;
    }

    updateCountFilter() {
        const filters = {
            count: 10,
            search: 'macbook',
            page: 1
        };

        const searchQuery = urlParser(filters).slice(0, -1);
        console.log('Search query: ', searchQuery);

        this.props.history.push({
            pathname: '/products',
            search: `?${searchQuery}`
        });
        this.props.filterProducts(filters);
    }


    updatePageFilter() {
        const filters = {
            count: 10,
            search: 'macbook',
            page: 3
        };

        const searchQuery = urlParser(filters).slice(0, -1);
        console.log('Search query: ', searchQuery);

        this.props.history.push({
            pathname: '/products',
            search: `?${searchQuery}`
        });
        this.props.filterProducts(filters);
    }

    render() {
        if (this.props.products.length > 0) {
            return (
                <div>
                    <div>
                        <ProductsFilter />
                        <h2>{JSON.stringify(this.props.filters)}</h2>
                        <li>
                            <button onClick={() => this.updateCountFilter()}>Count 10</button>
                        </li>
                        <li>
                            <button onClick={() => this.updatePageFilter()}>Page 3</button>
                        </li>
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
        products: state.products,
        filters: state.filters
    };
};


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchProducts,
        filterProducts: (filters) => dispatch(
            {
                type: FILTER_PRODUCTS,
                payload: {
                    data: {
                        ...filters
                    }
                }
            }
        )
    }, dispatch)
}

function loadData(store) {
    return store.dispatch(fetchProducts());
}

export default {
    component: connect(mapStateToProps, mapDispatchToProps)(requireAuth(withRouter(ProductsPage))),
    loadData
}