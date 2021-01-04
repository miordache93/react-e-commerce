import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import App from './App';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...ProductsPage,
                path: '/products'
            },
            {
                ...ProductDetailsPage,
                path: '/product/:id',
                exact: true
            },
            {
                ...LoginPage,
                path: '/login'
            },
            {
                ...NotFoundPage
            }
        ]
    }
];