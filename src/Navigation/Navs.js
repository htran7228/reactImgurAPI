import React from 'react';
import './navi.css';
import Aux from '../Axc/Axu.js';
import { NavLink } from "react-router-dom";


const navs = () => {


        return (
        <Aux >
        <div className="nav">
            <div className="nav-header">
            <div className="nav-title">
              HTran7228
            </div>
          </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
          </label>
        </div>
          <input type="checkbox" id="nav-check"></input>  
          <div className="nav-links">
          <NavLink to="/search">Search Gallery</NavLink>
            <NavLink to="/gallery">Gallery</NavLink> 
            <NavLink to="/">Album</NavLink>
          </div>
      </div>
      </Aux >
     );


}

export default navs;