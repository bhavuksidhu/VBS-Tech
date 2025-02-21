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
    <div>
      <nav className="navbar navbar-expand-lg back-groundd">
        <div className="container d-flex justify-content-between div1">
        <NavLink  exact to="/">
          <img src={img1} className="logoImg"  alt="Logo" />
          </NavLink>
        
          <div className='d-flex navbaricon'>
            <NavLink className="nav-link change text-light btn1 ms-4 mt-2 btnn" style={{ backgroundColor: "black" }} to="/contactus" activeClassName="active" onClick={closeOffcanvas}>Contact Us</NavLink>
            <button className="navbar-toggler" type="button" onClick={toggleOffcanvas} aria-expanded={isOffcanvasOpen ? "true" : "false"}>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className={`collapse navbar-collapse ${isOffcanvasOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gapes">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/" activeClassName="active" onClick={closeOffcanvas}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/socialmedia" activeClassName="active" onClick={closeOffcanvas}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/paidsearch" activeClassName="active" onClick={closeOffcanvas}>Project</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/webdesign" activeClassName="active" onClick={closeOffcanvas}>Service</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/merkto" activeClassName="active" onClick={closeOffcanvas}>Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link "  to="/contactus" activeClassName="active" onClick={closeOffcanvas}>Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className={`offcanvas offcanvas-start ${isOffcanvasOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <NavLink  exact to="/">
          <img src={img1} className="logoImg" alt="Logo" />
          </NavLink>
        
          <button type="button" className="btn-close" onClick={toggleOffcanvas} aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/" activeClassName="active" onClick={closeOffcanvas}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/socialmedia" activeClassName="active" onClick={closeOffcanvas}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/paidsearch" activeClassName="active" onClick={closeOffcanvas}>Project</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/webdesign" activeClassName="active" onClick={closeOffcanvas}>Service</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/merkto" activeClassName="active" onClick={closeOffcanvas}>Blog</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link"  to="/contactus" activeClassName="active" onClick={closeOffcanvas}>ContactUs</NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}