import React from "react";
import './Login.css';
import fire from '../LoginComponents/Fire';
import {withRouter} from "react-router-dom";


class LoginBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }
    submitLogin(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {}).catch((error) => {
            console.log(error);
        });
        this.props.history.push("/");
    }

    //email & password fields
    handleChange(e) {
        this.setState({ [e.target.name]:e.target.value});
    }


    render() {
        return (
            //box for login we can change the style later
           <div className="inner-container">
               <div className ="box">
                   <div className="input-group">
                       <label htmlFor="email">Email</label>
                       <input className="login-input" value={this.state.email} onChange={this.handleChange} type="text" name="email" placeholder="Email"/>
                   </div>
                   <div className="input-group">
                       <label htmlFor="password">Password</label>
                       <input className="login-input" value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Password"/>
                   </div>
               </div>
               <button type="button" className="login-btn" onClick={this.submitLogin}>Login</button>
           </div>
        )
    }
}
export default withRouter(LoginBox);