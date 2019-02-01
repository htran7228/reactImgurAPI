import React, { Component } from 'react';
import Album from './components/Album/album';
import Gallery from './components/Gallery/gallery';
import Search from './components/searchbar/search';
import Navs from './Navigation/Navs';
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';

class App extends Component {



  render() {
    return (
     <HashRouter>
     <div className="App">
       <Navs/>
       <Switch>
       <Route exact path="/" component={Album}/>
       <Route path="/gallery" component={Gallery}/>
       <Route path="/search" component={Search}/>
       </Switch>
       </div>
     </HashRouter>
    
    );
  }
}

export default App;
