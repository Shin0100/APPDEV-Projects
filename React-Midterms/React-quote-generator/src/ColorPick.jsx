import React, { useState } from 'react';

const randomColor = ["A", "B", "C", "D", "E", "F", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const quotes = [
    "He who is brave is free. — Seneca", 
    "To be everywhere is to be nowhere. — Seneca", 
    "Don’t waste time on what you cannot control or change. — Meditations",
    "No man is free who is not master of himself. — Epictetus",
    "It's not what happens to you, but how you react to it that matters. — Epictetus",
    "Accept the things to which fate binds you, and love the people with whom fate brings you together. — Marcus Aurelius", 
];

export default function ColorPicker() {
    const [color, setColor] = useState('#FFFFFF');
    const [currentQuote, setCurrentQuote] = useState(quotes[0]);
    const [currentIndex, setCurrentIndex] = useState(0);


    function getRandomNumber(max) {
        return Math.floor(Math.random() * max);
    }


    function getRandomColor() {
        let hex = "#";
        for (let i = 0; i < 6; i++) {
            hex += randomColor[getRandomNumber(randomColor.length)];
        }
        return hex;
    }


    function randomColorChange() {
        setColor(getRandomColor());
    }


    function handleColorChange(event) {
        setColor(event.target.value);
    }

    function randomQuote() {
        const randomIndex = getRandomNumber(quotes.length);
        setCurrentQuote(quotes[randomIndex]);
        setCurrentIndex(randomIndex);
        setColor(getRandomColor());
    }


    function nextQuote() {
        const newIndex = (currentIndex + 1) % quotes.length;
        setCurrentQuote(quotes[newIndex]);
        setCurrentIndex(newIndex);
        setColor(getRandomColor());
    }

    function prevQuote() {
        const newIndex = (currentIndex - 1 + quotes.length) % quotes.length;
        setCurrentQuote(quotes[newIndex]);
        setCurrentIndex(newIndex);
        setColor(getRandomColor());
    }

    return (
        <div className="color-picker-container">
            <h1>Quote Generator</h1>
            <h3>Quote for you:</h3>
            <div className="color-display" style={{ backgroundColor: color }}>
                <p>{currentQuote}</p>
            </div>
            <br />
            <label>Select a color: </label>
            <input type="color" value={color} onChange={handleColorChange} />
            <button className="randomize" onClick={randomColorChange}>Change Color</button>
            <button className="randomize" onClick={randomQuote}>Random Quote</button>
            <button className="randomize" onClick={nextQuote}>Next Quote</button>
            <button className="randomize" onClick={prevQuote}>Previous Quote</button>
        </div>
    );
}
