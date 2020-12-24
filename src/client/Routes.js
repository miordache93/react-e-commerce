import React from 'react';
import HomePage from './pages/HomePage';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './pages/LoginPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

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
                ...LoginPage,
                path: '/login'
            },
            {
                ...ProductDetailsPage,
                path: '/product/:id'
            },
            {
                ...NotFoundPage
            }
        ]
    }
];