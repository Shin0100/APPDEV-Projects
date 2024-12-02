import './header.css';
import React from 'react';

export default function Header() {
    return (
        <header>
            <nav>
                <div className="nav-center">
                    <ul className="links">
                        <li>
                            <a href="index.html">Home   |</a>
                        </li>
                        <li>
                            <a href="#contacts">About   |</a>
                        </li>
                        <li>
                            <a href="projects.html">Projects   |</a>
                        </li>
                        <li>
                            <a href="Body.jsx">Contacts   |</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
