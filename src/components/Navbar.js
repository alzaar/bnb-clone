import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NoMatch from '../pages/NoMatch';
import './css/navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <input type="text" placeholder="Search.."/>
        </ul>
        <div class="topnav">


        </div>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    );
  }
}

export default Navbar;
