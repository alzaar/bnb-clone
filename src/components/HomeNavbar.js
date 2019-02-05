import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NoMatch from '../pages/NoMatch';
import './css/homenavbar.css';
import SearchOption from './SearchOption';

class HomeNavbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <nav class="mynavbar">
          <a class="navButtonHome" href="#">Home</a>
          <a class="navButtonAbout" href="#">About</a>
        </nav>
      </div>
    );
  }
}

export default HomeNavbar;
