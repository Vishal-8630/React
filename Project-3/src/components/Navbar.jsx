import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar__container">
            <div className="navbar__left">
                <img src="logo.png" alt="" />
                <h1>Meme Generator</h1>
            </div>

            <div className="navbar__right">
                <h3>React Course - Project 3</h3>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
