import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="./Assets/footer/small black vbs (2).png" className="ms-3 mb-2" alt="" style={{ width: "100px" }} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ border: "none" }}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mes" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item ms-4 mt-2">
                <NavLink className="nav-link change text-dark" to="/" exact activeClassName="active">Home</NavLink>
              </li>
              <li className="nav-item ms-4 mt-2">
                <NavLink className="nav-link change text-dark" to="/socialmedia" activeClassName="active">Social Media</NavLink>
              </li>
              <li className="nav-item ms-4 mt-2">
                <NavLink className="nav-link change text-dark" to="/paidsearch" activeClassName="active">Paid Search</NavLink>
              </li>
              <li className="nav-item ms-4 mt-2">
                <NavLink className="nav-link change text-dark" to="/webdesign" activeClassName="active">Web Design</NavLink>
              </li>
              <li className="nav-item ms-4 mt-2">
                <NavLink className="nav-link change text-dark" to="/merkto" activeClassName="active">Merkto</NavLink>
              </li>
              <li className="nav-item ms-4 mt-2">
                <NavLink className="nav-link change text-dark" to="/contactus" activeClassName="active">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
