import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import img1 from '../Images/logo.png';
import './Navbar.css';

export default function Navbar({ cart }) {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const closeOffcanvas = () => {
    setIsOffcanvasOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={img1} className="ms-3 mb-2" alt="Logo" style={{ width: "100px" }} />
          </a>

          <div className='d-flex hww'>
            <NavLink className="nav-link change text-light btn1 ms-4 mt-2 btnn" to="/contactus" style={{ backgroundColor: "black" }}>
              Contact Us
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" style={{ border: "none" }} onClick={toggleOffcanvas}>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item ms-4 mt-2">
                <NavLink className="nav-link change text-dark" to="/" end style={({ isActive }) => ({ color: isActive ? 'black' : '' })}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/socialmedia" style={({ isActive }) => ({ color: isActive ? 'black' : '' })} onClick={closeOffcanvas}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/paidsearch" style={({ isActive }) => ({ color: isActive ? 'black' : '' })} onClick={closeOffcanvas}>Project</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/webdesign" style={({ isActive }) => ({ color: isActive ? 'black' : '' })} onClick={closeOffcanvas}>Service</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/merkto" style={({ isActive }) => ({ color: isActive ? 'black' : '' })} onClick={closeOffcanvas}>Blog</NavLink>
              </li>
              <li className="nav-item ms-4 mt-2">
                <NavLink className="nav-link change text-light" to="/contactus" style={{ backgroundColor: "black" }}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Offcanvas menu */}
      <div className={`offcanvas offcanvas-start ${isOffcanvasOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <NavLink exact to="/">
            <img src={img1} className="logoImg" alt="Logo" />
          </NavLink>
          <button type="button" className="btn-close" onClick={toggleOffcanvas} aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/" style={({ isActive }) => ({ color: isActive ? 'black' : '' })} onClick={closeOffcanvas}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/socialmedia" style={({ isActive }) => ({ color: isActive ? 'black' : '' })} onClick={closeOffcanvas}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/paidsearch" style={({ isActive }) => ({ color: isActive ? 'black' : '' })} onClick={closeOffcanvas}>Project</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/webdesign" style={({ isActive }) => ({ color: isActive ? 'black' : '' })} onClick={closeOffcanvas}>Service</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/merkto" style={({ isActive }) => ({ color: isActive ? 'black' : '' })} onClick={closeOffcanvas}>Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contactus" style={({ isActive }) => ({ color: isActive ? 'black' : '' })} onClick={closeOffcanvas}>Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
