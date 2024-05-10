import React from 'react';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="small_3d_logo-removebg-preview.png" className="ms-3 mb-2" alt="" style={{ width: "100px" }} />
          <img src="small_black_vbs-removebg-preview (2).png" className="img-thumbnail" alt="..." style={{ maxWidth: "150px", border: "none" }} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ border: "none" }}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item ms-4 mt-2">
              <a className="nav-link active change" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item ms-4 mt-2">
              <a className="nav-link active change" aria-current="page" href="#">Social Media</a>
            </li>
            <li className="nav-item ms-4 mt-2">
              <a className="nav-link active change" aria-current="page" href="#">Paid Search</a>
            </li>
            <li className="nav-item ms-4 mt-2">
              <a className="nav-link active change" aria-current="page" href="#">Web Design</a>
            </li>
            <li className="nav-item ms-4 mt-2">
              <a className="nav-link active change" aria-current="page" href="#">Merkto</a>
            </li>
            <li className="nav-item ms-4 mt-2">
              <a className="nav-link active change" aria-current="page" href="#">ContactUs</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
