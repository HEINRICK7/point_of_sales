import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navbar from './components/navbar.componet';
import Product from './components/product.componet';
import CadProduct from './components/cadProduct.componet';
import ListProduct from './components/listProduct.componet';
import EditProduct from './components/editProduct.componet';

function App(){
    return(
        <Router>
            <Navbar />
            <Route path="/product" exact component={Product} />
            <Route path="/cadProduct" component={CadProduct} />
            <Route path="/listProduct" component={ListProduct} />
            <Route path="/editProduct" component={EditProduct} />    
        </Router>
    );
}

export default App;