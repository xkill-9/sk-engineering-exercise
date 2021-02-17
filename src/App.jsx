import React from 'react';
import './reset.css';
import './App.css';
import logotypeSVG from './logotype.svg';
import logoSVG from './logo.svg';
import shopIcon from './shop-icon.svg';

function App() {
  return (
    <>
      <header className="bg-color:black">
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
        <div className="hero display:flex-column justify-content:flex-end center section padding:large text-color:white stack">
          <h1 className="font-weight:bold font-size:extra">
            Squeaky. Clean. Paint.
          </h1>
          <h2>Hight-quality, non-toxic paint shipped right to your door.</h2>
          <a className="btn align-self:flex-start" href="/shop">
            Shop the collection
          </a>
        </div>
      </header>
      <main className="section padding:large bg-color:accent text-color:white display:flex-column stack justify-content:center align-items:center">
        <h2 className="font-size:large">We send really nice emails</h2>
        <form
          className="form display:flex justify-content:space-between align-items:center padding:small bg-color:white border-radius"
          action="#"
        >
          <div className="flex-grow:fit">
            <label className="sr-only" htmlFor="email">
              Email address
            </label>
            <input type="email" placeholder="Enter your email address" />
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </main>
      <footer className="bg-color:black">
        <div className="center text-color:white display:flex justify-content:space-between flex-wrap:wrap">
          <div className="stack padding:extra">
            <h3 className="text-style:label font-size:small">Shop</h3>
            <ul className="stack">
              <li>
                <a href="/face">Face Paint</a>
              </li>
              <li>
                <a href="/craft">Craft Paint</a>
              </li>
              <li>
                <a href="/spray">Spray Paint</a>
              </li>
            </ul>
          </div>
          <div className="stack padding:extra">
            <h3 className="text-style:label font-size:small">Resources</h3>
            <ul className="stack">
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="stack padding:extra">
            <h3 className="text-style:label font-size:small">Company</h3>
            <ul className="stack">
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms of Use</a>
              </li>
              <li>
                <a href="/us">About Us</a>
              </li>
              <li>
                <a href="/join">Join The Team</a>
              </li>
            </ul>
          </div>
          <div className="stack padding:extra">
            <span></span>
            <ul className="stack">
              <li>
                <a href="/copyright">&copy; 2020 Better Paint</a>
              </li>
              <li>
                <a href="/">All Rights Reserved</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
