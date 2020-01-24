import React, { Component } from 'react'
import { Redirect } from 'react-router';

export class Login extends Component {
    render() {
        const { value, handleChange, handleLogin, isLoggedin} = this.props;
        if (isLoggedin){
        return < Redirect to="/home" />
        }
        return(
            <div>
                <input value={value} type= "text" id="input" onChange={handleChange} />
                <button onClick={handleLogin}>Login</button>
            </div>
        )
    }
}

export default Login
