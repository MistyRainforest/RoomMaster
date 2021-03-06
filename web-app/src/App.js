import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import './App.css';

//import 
import fire from './LoginComponents/Fire';
import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';

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
      sideDrawerOpen: false,
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
      console.log(user);
      if (user) {
        this.setState({ user });
      }
      else {
        this.setState({ user: false});
      }
    });
  }

  //return if is logged in
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <BrowserRouter>
      <div style={{marginTop: '64px', height: '100%'}}>
        <Toolbar drawerClickHandler = {this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Navigation user={"this.state.user"}/>
        {fire.auth().currentUser ? "Hello user: " + this.state.user.uid : ""}
        <Switch>
          <Route path="/" component = {Home} exact />
          <Route path="/Login" render={() => (fire.auth().currentUser ? (<Redirect to="/"/>) : (<Login/>))}/>
          <Route component = {Error404} />
        </Switch>
        
      </div>
      </BrowserRouter>
    )
  }
}
export default App;
