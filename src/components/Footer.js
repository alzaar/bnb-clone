import React from 'react';
import './css/footer.css'

import { Route, Link, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NoMatch from '../pages/NoMatch';

const Footer = (props) => {
  return (
    <footer>
      <p className="changeSize">Contact information: <a href="mailto:someone@example.com">
        someone@example.com</a>. Bnb-Clone 2019
        &copy;</p>
    </footer>
  );
}

export default Footer;
