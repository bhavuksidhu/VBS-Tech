import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./Assets/footer/small black vbs (1).png" className="ms-3 mb-2" alt="" style={{ width: "100px" }} />
            {/* <img src="small_black_vbs-removebg-preview (2).png" className="img-thumbnail" alt="..." style={{ maxWidth: "150px", border: "none" }} /> */}
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ border: "none" }}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mes" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item ms-4 mt-2">
                <Link className="nav-link  change text-dark fw-bold" to="/">Home</Link>
              </li>
              <li className="nav-item ms-4 mt-2">
                <Link className="nav-link  change text-dark fw-bold" to="/socialmedia">Social Media</Link>
              </li>
              <li className="nav-item ms-4 mt-2">
                <Link className="nav-link  change text-dark fw-bold" to="/paidsearch">Paid Search</Link>
              </li>
              <li className="nav-item ms-4 mt-2">
                <Link className="nav-link  change text-dark fw-bold" to="/webdesign">Web Design</Link>
              </li>
              <li className="nav-item ms-4 mt-2">
                <Link className="nav-link  change text-dark fw-bold" to="/merkto">Merkto</Link>
              </li>
              <li className="nav-item ms-4 mt-2">
                <Link className="nav-link  change text-dark fw-bold" to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
