import React, { useState } from "react";
import Login from "./Login";

function Shop(props) {
    let shopItems = props.items;

    const [cart, setCart] = useState([]);

    function addItem(item) {
        setCart((c) => [...c, item]);
    }

    function renderCart() {
        return cart.map((item) => (
            <div key={item.id}>
                <li>{item.name}</li>
                <p>Price per piece: ${item.price}</p>
                <br />
            </div>
        ));
    }

    function renderItems() {
        return shopItems.map((item) => (
            <div key={item.id}>
                <li>{item.name}</li>
                <p>Price per piece: ${item.price}</p>
                <button onClick={() => addItem(item)}>Add to cart</button>
            </div>
        ));
    }
    if (props.login === false) {
        return <Login/>
    } else {
        return (
            <div>
             <h4>This is the shop:</h4>
             <ul>{renderItems()}</ul>
             <h4>Cart Items:</h4>
             {cart.length > 0 ? <ul>{renderCart()}</ul> : <p>There are no items in the cart</p>}
         </div>
        )
    }

}

export default Shop;
