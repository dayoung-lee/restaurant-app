// src/Root.js
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

const Root = () => {
    return (
        <BrowserRouter basename={'' || '/restaurant-app'}>
            <App />
        </BrowserRouter>
    );
};

export default Root;