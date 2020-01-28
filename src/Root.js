// src/Root.js
import React from 'react';
import {HashRouter} from 'react-router-dom';
import App from './App';

const Root = () => {
    return (
        <HashRouter basename={'/'}>
            <App />
        </HashRouter>
    );
};

export default Root;