// Header.jsx
import React from 'react';
import './header.css';

export default function Header() {
    return (
        <header>
            <nav>
                <div className="nav-center">
                    <ul className="links">
                        <li>
                            <a href="#product-overview">Home</a>
                        </li>
                        <li>
                            <a href="#specifications">Specifications</a>
                        </li>
                        <li>
                            <a href="#key-features">Key Features</a>
                        </li>
                        <li>
                            <a href="#setup-instructions">Setup Instructions</a>
                        </li>
                        <li>
                            <a href="#using-keyboard">Using the Keyboard</a>
                        </li>
                        <li>
                            <a href="#troubleshooting">Troubleshooting</a>
                        </li>
                        <li>
                            <a href="#maintenance-care">Maintenance & Care</a>
                        </li>
                        <li>
                            <a href="#warranty-support">Warranty & Support</a>
                        </li>
                        <li>
                            <a href="#contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
