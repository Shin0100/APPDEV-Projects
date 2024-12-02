import React,{useState} from "react";
import Review from './Reviews'
import './index.css';

export default function Login() {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);


    const account = [{
        username: "admin",
        password: "admin"
    }]


    function handleUserNameChange(event){
        setUsername(event.target.value);
    }
    function handlePasswordChange(event){
        setPassword(event.target.value)
    }
    function handleLogin(){
        account.map((acc) => {
            if (acc.username == userName && acc.password == password){
                setLogin(true);
            } 
        })
    }

    function renderReview(){
        return <Review/>
    }

    const renderLoginForm = () => {
        return(
            <div>
            <h1>Welcome to Wormmmy's Reviews!</h1>
            <h4>Login to Continue:</h4>
            Username: 
            <input type="text" value={userName} name="username" id="username" onChange={handleUserNameChange} required />
            <br />
            <p>{userName}</p>
            <br />
            Password:
            <input type="password" value={password}name="password" id="password" onChange={handlePasswordChange} required/>
            <br />
            <br />
            <button type="button" onClick={handleLogin}>Login</button>
            </div>
        );
    }

    if (login == true){
        return renderReview();
    }else{
        return renderLoginForm();
    }
    
}