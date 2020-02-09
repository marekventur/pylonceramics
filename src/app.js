import React from 'react';
import "./header.css";
import { Content } from './content';

export function App() {
  return (
    <div className="app">
      <header>
        <div className="header">
          <a href="/" className="logo">Pylon Ceramics</a>

          <div class="links">
            <a href="https://www.instagram.com/pylon_ceramics" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="mailto:hello@pylonceramics.com" aria-label="Email">
              <i class="far fa-envelope"></i>
            </a>
            <a href="https://www.facebook.com/pylonceramics/" aria-label="Facebook">
              <i class="fab fa-facebook-square"></i>
            </a>
          </div>
        </div>

        
      </header>

      <Content />
    </div>
  );
}

