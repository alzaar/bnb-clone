import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import NoMatch from './pages/NoMatch'
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route component={NoMatch}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
