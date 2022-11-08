// REACT
import React, { Component } from 'react'
// CSS
import "./Authenticator.css";
// GOOGLE LOGIN
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

export class Authenticator extends Component {
    render() {
        return (
            <div className="auth-box">
                <GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }
}

export default Authenticator