import React from "react";
import './Login.css'
//login placeholder

//login page render
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        //we can insert logic here for rejecting bad login details
        return (
            <div className="center">
                <div className="box-container">
                    <LoginBox />
                </div>
            </div>
        )
    }
}

//Login box render
 class LoginBox extends React.Component {
     constructor(props) {
         super(props);
         this.state = {};
     }
     submitLogin(e) {
        
     }


     render() {
         return (
             //box for login we can change the style later
            <div className="inner-container">
                <div className ="box">
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input className="login-input" type="text" name="username" placeholder="Username"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input className="login-input" type="password" name="password" placeholder="Password"/>
                    </div>
                </div>
                <button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Login</button>
            </div>
         )
     }
 }

export default Login;