import React from "react";
import { NavLink } from "react-router-dom";

//debug navigation panel
const Navigation = () => {
    return (
        <div>
            Debug links to other pages
            <br/>
            <NavLink to = "/">Home</NavLink>
            <br/>
            <NavLink to = "/Login">Login</NavLink>
        </div>
    )
}
export default Navigation;