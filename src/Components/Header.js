import React from 'react';

export default function Header({ data }) {
  if (data) {
    var name = data.name;
    var description = data.description;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <header id="home">
      {/* Deprecation Banner */}
      <div
        style={{
          backgroundColor: 'red',
          color: 'white',
          padding: '20px',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '18px',
          zIndex: 9999,
        }}
      >
        ⚠️ This is an old version of the website. Visit the new site at{' '}
        <a
          href="https://jimmy-njuguna.vercel.app/"
          style={{ color: 'white', textDecoration: 'underline' }}
        >
          newsite.example.com
        </a>
      </div>

      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {name}.</h1>
          <h3>{description}</h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}
