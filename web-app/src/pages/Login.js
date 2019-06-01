import React from "react";
import '../LoginComponents/Login.css';
import fire from '../LoginComponents/Fire';
//importing the loginboxthing
import LoginBox from "../LoginComponents/LoginBox";
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



export default Login;