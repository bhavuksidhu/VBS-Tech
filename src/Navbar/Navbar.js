import React from 'react';
import { NavLink } from 'react-router-dom';
import img1 from '../Images/logo.png';

function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={img1} className="ms-3 mb-2 " alt="Logo" style={{ width: "100px" }} />
          </a>
              
        <div className='d-flex hww'>
        <NavLink className="nav-link change text-light btn1  ms-4 mt-2 btnn" style={{ backgroundColor: "black" }} to="/contactus" activeClassName="active">Contact Us</NavLink>
        <button className="navbar-toggler" type="button" onClick={() => props.setNav(true)} data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" style={{ border: "none" }}>
            <span className="navbar-toggler-icon"></span>
          </button>
          </div>  
         
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item ms-4 mt-2">
                <NavLink className="nav-link change text-dark" to="/" exact activeClassName="active">Home</NavLink>
              </li>
              <li className="nav-item ms-4 mt-2">
                <NavLink className="nav-link change text-dark" to="/socialmedia" activeClassName="active">About</NavLink>
              </li>
              <li className="nav-item ms-4 mt-2">
                <NavLink className="nav-link change text-dark" to="/paidsearch" activeClassName="active">Project</NavLink>
              </li>
              <li className="nav-item ms-4 mt-2">
                <NavLink className="nav-link change text-dark" to="/webdesign" activeClassName="active">Service</NavLink>
              </li>
              <li className="nav-item ms-4 mt-2">
                <NavLink className="nav-link change text-dark" to="/merkto" activeClassName="active">Blog</NavLink>
              </li>
              <li className="nav-item ms-4 mt-2">
                <NavLink className="nav-link change text-light" style={{ backgroundColor: "black" }} to="/contactus" activeClassName="active">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {props.nav==true ? <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <img src={img1}/>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item ms-4 mt-2">
              <NavLink className="nav-link change text-dark" onClick={() => {props.setNav(false)}} to="/" exact activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item ms-4 mt-2">
              <NavLink className="nav-link change text-dark" to="/socialmedia" activeClassName="active">About</NavLink>
            </li>
            <li className="nav-item ms-4 mt-2">
              <NavLink className="nav-link change text-dark" to="/paidsearch" activeClassName="active">Page</NavLink>
            </li>
            <li className="nav-item ms-4 mt-2">
              <NavLink className="nav-link change text-dark" to="/webdesign" activeClassName="active">Service</NavLink>
            </li>
            <li className="nav-item ms-4 mt-2">
              <NavLink className="nav-link change text-dark" to="/merkto" activeClassName="active">Blog</NavLink>
            </li>
            <li className="nav-item ms-4 mt-2 btnn">
              <NavLink className="nav-link change text-light" style={{ backgroundColor: "black" }} to="/contactus" activeClassName="active">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div> : null }
      
    </>
  );
}
export default Navbar ; 