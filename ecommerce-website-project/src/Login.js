import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./Login.css"
import logoImage from "./img/logo.png"
import { auth } from './firebase'

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault(); //prevent refresh
        //logic for login
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //logged in, redirect
            history.push("/");
        })
        .catch((e) => alert(e.message));
    }

    const register = (event) => {
        event.preventDefault(); //prevent refresh
        //logic for register user
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //created a user and logged in, redirect to home page
        })
        .catch((e) => alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <div className="login__logoContainer">
                    <img className="login__logo" src={logoImage} alt="logo" />
                </div>
            </Link>

            <div className="login__container">
                <div className="login__signinHeading">
                    <h1>Sign In</h1>
                </div>
                <form className="login__form">
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="text" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit">Sign in</button>
                    <p>
                        By signing-in you agree to our terms and conditions
                    </p>
                    <button onClick={register}>Create new account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
