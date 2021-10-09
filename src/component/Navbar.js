import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <NavLink exact className="navbar" activeClassName="active" to="/" > Home </NavLink>
                <NavLink exact className="navbar" activeClassName="active" to="/signup" > Signup </NavLink>
                <NavLink exact className="navbar" activeClassName="active" to="/users" > Users </NavLink>
            </div>
        </>
    )
} 

export default Navbar;