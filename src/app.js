import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./header.css";
import { Content } from './content';
import { AboutMe } from './about-me';

export function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <div className="header">
            <Link to="/" className="logo">Pylon Ceramics</Link>

            <div className="links links--left">
              <a href="https://www.etsy.com/uk/shop/PylonCeramics" rel="noopener noreferrer" target="_blank">
                shop
              </a>
              <Link to="/about-me">
                about me
              </Link>
            </div>

            <div className="links links--right">
              <a className="icon" href="https://www.instagram.com/pylon_ceramics" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="icon" href="mailto:hello@pylonceramics.com" aria-label="Email">
                <i className="far fa-envelope"></i>
              </a>
              <a className="icon" href="https://www.facebook.com/pylonceramics/" aria-label="Facebook">
                <i className="fab fa-facebook-square"></i>
              </a>
            </div>
          </div>

          
        </header>

        <Switch>
          <Route path="/about-me">
            <AboutMe />
          </Route>
          <Route path="/">
            <Content />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

