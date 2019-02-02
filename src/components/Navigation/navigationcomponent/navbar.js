import React from 'react';
import Navlink from './navlink';
import './navi.css';

const navbar = () => {

    return (     
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
          <Navlink/>
      </div>
    )


}


export default navbar;