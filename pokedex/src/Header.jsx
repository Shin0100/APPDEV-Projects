import React from 'react';
import './Header.css'; // Import CSS for styling
import logo from './assets/p.gif'; // Adjust the path to your logo image

export default function Header() {
    return (
        <> <hr />
        <header className="header">
            <div className="logo-title">
                <img src={logo} alt="Pokédex Logo" className="pokedex-logo" />
                <h1 className="pokedex-title">Pokédex</h1>
            </div>
            <nav className="header-nav">
                <a href="#home" className="nav-link">Home</a>
                <hr />
                <a href="#foot" className="nav-link">Contacts</a>
                <hr />
            </nav>
            
        </header>
        
        </>
    );
}
