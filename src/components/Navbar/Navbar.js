import React from 'react';
import './Navbar.css'
import logoeme from '../../img/logoeme.png';


const Navbar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
           
            <div className="toolbar-logo"><a><img className="logo" src={logoeme}/></a></div>
            <div className="espacio"/>
            <div className="toolbar-item">
                <ul>
                    <li><a href="/">Cerrar Sesión</a></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Navbar;