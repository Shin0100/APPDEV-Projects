import React, { useState } from 'react';

function MyCart() {
    const [myCart, setMyCart] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addItem = () => {
        if (inputValue) {
            setMyCart([...myCart, inputValue]);
            setInputValue('');
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="Add item to cart" 
            />
            <button onClick={addItem}>Add to Cart</button>
            <ul>
                {myCart.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default MyCart;
