import React, { useState } from "react";
import Shop from "./shop";
import AdminPanel from "./adminpanel";


export default function Login() {

    const accounts = [
        { id: 1, username: "customer", password: "123", role: "customer" },
        { id: 2, username: "admin", password: "123", role: "admin" },
    ];
    const items = [
        { id: 1, name: "Item 1", price: 10 },
        { id: 2, name: "Item 2", price: 15 },
        { id: 3, name: "Item 3", price: 20 },
        { id: 4, name: "Item 4", price: 25 },
        { id: 5, name: "Item 5", price: 30 },
    ];
    
    
    const [login, setLogin] = useState(false);
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    function getName(event) {
        setUsername(event.target.value);
    }

    function getPassword(event) {
        setPassword(event.target.value);
    }

    function handleLogin() {
        accounts.map((account) => {
            if (account.username === username && account.password === password) {
                setLogin(true);
                setRole(account.role);
            }
        });
    }

    function renderLogin() {
        return (
            <div>
                <h1>Login:</h1>
                Username: <input type="text" placeholder="Username" onChange={getName} />
                Password: <input type="Password" placeholder="Password" onChange={getPassword} />
                <button onClick={handleLogin}>Login</button>
            </div>
        );
    }

    function renderShop() {
        return <Shop items={items} login={login} />;
    }

   
    function renderadmin(){
        return(
            <AdminPanel login = {login} accounts = {accounts}/>
        )
    }

    if (login === false) {
        return renderLogin();
    } else {
        if(role === "customer"){
            return renderShop()
        }else{
            return renderadmin();
        }
    }
}
