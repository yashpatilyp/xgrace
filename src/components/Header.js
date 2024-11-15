import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
      <header id="header" className="header d-flex align-items-center fixed-top bg-white">
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <Link to="/"  className="logo d-flex align-items-center me-auto">
            <img src="assets/img/logo1.jpg" alt="logo" />
            <h1 className="sitename">XGrace</h1>
          </Link>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <Link to="/"  className="">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" >
                  About
                </Link>
              </li>
              <li>
                <Link to="/features" >
                  Features
                </Link>
              </li>
              <li>
                <Link to="/services" >
                  Services
                </Link>
              </li>
             
              <li>
                <Link to="/contact" >
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/gallery">
                  Gallery
                </Link>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
          <Link className="btn-getstarted" to="about" >
            Get Started
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header
