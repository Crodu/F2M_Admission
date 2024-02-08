import React from 'react';
import logo from '../../f2m-logo.png'
import './posterheader.css';

const PosterHeader = () => {
    return (
        <header className="App-header">
          <a href="/">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
        Poster Frontend
      </header>
    );
};

export default PosterHeader;
