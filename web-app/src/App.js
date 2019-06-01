import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

//import 
import fire from './LoginComponents/Fire';

//import pages
import Login from "./pages/Login"; 
import Home from "./pages/Home";
import Navigation from "./pages/Navigation";
import Error404 from "./pages/Error";



//list all pages as navlinks and show navigation panel
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{},
    }
    //this.isLoggedIn = this.isLoggedIn.bind(this);
  }

  //initialize the page
  componentDidMount() {
    this.authListener();
  }

  //checks and sets user accessing the page
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
      else {
        this.setState({ user: false});
      }
    });
  }

  //return if is logged in

  render() {
    return (
      <BrowserRouter>
      <div>
        <Navigation user={"this.state.user"}/>
        {fire.auth().currentUser ? "Hello user: " + this.state.user.uid : ""}
        <Switch>
          <Route path="/" component = {Home} exact />
          <Route path="/Login" component = {Login} />
          <Route component = {Error404} />
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}
export default App;
