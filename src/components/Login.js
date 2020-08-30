import React from 'react';
import '../styles/Login.css';
import appLogo from '../assets/app.png';
import appName from '../assets/logo.png'
import { Button } from '@material-ui/core';
import { auth, provider } from "../config/firebase";
import { actionTypes } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';

function Login() {

    const [state, dispatch] = useStateValue(); 

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch(error => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img src={appLogo} alt=""/>
                <img src={appName} alt=""/>
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login;
