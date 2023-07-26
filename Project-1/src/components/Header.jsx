import React from "react";

function Header() {
  return (
    <div>
      <nav className="navbar">
          <img src="/public/logo.png" alt="Logo" className="navbar__logo"/>
          <h3 className="navbar__heading">React Course - Project 1</h3>
      </nav>
    </div>
  );
}

export default Header;
