import React from 'react';
import './reset.css';
import './App.css';
import logotypeSVG from './logotype.svg';
import logoSVG from './logo.svg';
import shopIcon from './shop-icon.svg';

function App() {
  return (
    <>
      <header>
        <nav className="bg-color:white padding:medium ">
          <div className="display:flex justify-content:space-between center">
            <a href="/">
              <picture>
                <source srcSet={logotypeSVG} media="(min-width: 600px)" />
                <img src={logoSVG} alt="Better Paint" />
              </picture>
            </a>
            <a href="/shop">
              <img src={shopIcon} alt="Shopping Bag" />
            </a>
          </div>
        </nav>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}

export default App;
