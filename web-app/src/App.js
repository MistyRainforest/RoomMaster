import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

//import pages
import Login from "./pages/Login"; 
import Home from "./pages/Home";
import Navigation from "./pages/Navigation";
import Error404 from "./pages/Error";

//list all pages as navlinks and show navigation panel
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navigation />
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
