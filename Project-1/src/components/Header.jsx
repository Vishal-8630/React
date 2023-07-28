import React from "react";

function Header({ darkMode, toggleDarkMode }) {
  return (
    <div>
      <nav className="navbar">
          <img src="/public/logo.png" alt="Logo" className="navbar__logo"/>
          {/* <h3 className="navbar__heading">React Course - Project 1</h3> */}

          <div className="mode__container">
            <div className={"mode__dark " + (darkMode ? "dark" : "")}>Dark</div>
            <div className={`dark__mode__slider ${ darkMode ? "dark" : ""}`} onClick={toggleDarkMode}></div>
            <div className={"mode__light " + (darkMode ? "" : "dark")}>Light</div>
          </div>
      </nav>
    </div>
  );
}

export default Header;
