import React from "react";
import { NavLink } from "react-router-dom";
//debug navigation panel
var style = {
    textAlign: 'center'
};
const Navigation = () => {
    return (
        <div style={style}>
            Debug links to other pages
            <br/>                
            <NavLink to = "/"><button>Home</button></NavLink>
            <NavLink to = "/Login"><button>Login</button></NavLink>
        </div>
    )
}
export default Navigation;