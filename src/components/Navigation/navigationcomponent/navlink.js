import React from 'react';
import { NavLink } from "react-router-dom";

const navlink = () => {


        return (

            <div className="nav-links">
              <NavLink to="/search">Search Gallery</NavLink>
              <NavLink to="/gallery">Gallery</NavLink> 
              <NavLink to="/">Album</NavLink>
            </div>
        );


}

export default navlink;