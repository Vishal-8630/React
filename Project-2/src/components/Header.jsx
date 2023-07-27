import React from "react";
import photo_grid from '../assets/images/photo-grid.png';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <nav className="navbar">
          <img src="./logo.png" alt="Logo" className="navbar__logo box" />
        </nav>

        <section className="hero box">
          <div className="hero__images">
            <img src={photo_grid} alt="Photo Grid" />
          </div>
          <div className="hero__content box">
            <h1 className="hero__content__heading">Online Experiences</h1>
            <p className="hero__content__text">
              Join unique interactive activities led by one-of-a kind hosts-all
              without leaving home.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
