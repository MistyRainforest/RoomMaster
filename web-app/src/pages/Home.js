import React from "react";
import fire from "../LoginComponents/Fire";
import userDatabase from "../APICalls/user";

//homepage placeholder
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.logoutbutton = this.logoutbutton.bind(this);
        this.userData = userDatabase.getUserData(fire.auth.currentUser);
    }
    

    logout() {
        fire.auth().signOut();
    }

    logoutbutton() {
        var user = fire.auth().currentUser;
        if (user) {
            return (<button onClick={this.logout}>Logout</button>)
        }
    }

    render() {
        return (
            <div>
                <h1>Home Placeholder</h1>
                <li>{this.userData.user}</li>
                {this.logoutbutton()}
            </div>
        )
    }
}


export default Home;