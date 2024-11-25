import React from 'react';
import './Footer.css';

export default function Footer(){
    return(
        <>
        <hr />
        <footer className="footer" id='foot'>
        <p>&copy; {new Date().getFullYear()} My Pokédex || Written by: Jun Pasing, Ceolo Diane Kanapi || </p>
        <p>
                &nbsp; Follow us on 
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>, 
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>, 
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
            </p></footer>
        </>
    )
}