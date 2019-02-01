import React from 'react';
import './searchbar.css';

const searchbar = (props) => {


        return (
            <div className="search-box">
            <div className="wrap">
                <div className="search">
                <input type="text" placeholder="Search Gallery" className="searchTerm" onChange={props.change} ></input>         
           </div>
       </div>
            </div> 

        )




}

export default searchbar;