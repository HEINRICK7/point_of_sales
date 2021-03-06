import React, { Component } from "react";
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Home</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr auto">
                        <li className="navbar-item">
                            <Link to="/product" className="nav-link">Caixa Livre</Link>
                        </li>    

                        <li className="navbar-item">
                            <Link to="/cadProduct" className="nav-link">Cadastrar Produtos</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/listProduct" className="nav-link">Lista Produtos</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        );
    }
}