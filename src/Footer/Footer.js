import React, { useEffect } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  const phoneNumber = '+91 7300720901';
  const emailAddress = 'contact@vbstechsolutions.com';

  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`);
  };

  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const openGoogleMaps = () => {
    // Construct the address to be opened in Google Maps
    var address = "Bestech solutions , near pyarelal hospital , Bank colony , Modinagar 201204";
    // Encode the address for use in the Google Maps URL
    var encodedAddress = encodeURIComponent(address);
    // Open Google Maps in a new tab
    window.open("https://www.google.com/maps/search/?api=1&query=" + encodedAddress, "_blank");
  };

  return (
    <div>
      <div className="container-fluid" style={{ backgroundColor: "#FAFAFB" }}>
        <div className="p-5 m-5 text-dark">
          <div className="row mt-5 text-dark">
            {/* VBSTECH SOLUTIONS Section */}
            <div className="col-lg-4 mt-5 text-start text-dark col-md-6 col-sm-6 allaresame text-dark mb-5">
              <h5><b>VBSTECH SOLUTIONS</b></h5>
              <p className="pt-3 pj cd">
                We are completely dedicated to our business. Do not hesitate to contact us at any time, we will be happy to
                implement all your ideas to life.
              </p>
              <div className="d-flex justify-content-evenly col-lg-7">
                <i className="fa-brands fa-twitter fs-4"></i>
                <i className="fa-brands fa-facebook fs-4"></i>
                <i className="fa-brands fa-instagram fs-4"></i>
                <i className="fa-brands fa-github fs-4"></i>
              </div>
            </div>

            {/* Links Section */}
            <div className="col-lg-2 mt-5 d-flex justify-content-center col-md-6 col-sm-6 himu">
              <div>
                <h5><b>Our Links</b></h5>
                <p className="pj pt-3 br"><Link to="/socialmedia">About</Link></p>
                <p className="pj br"><Link to="/paidsearch">Project</Link></p>
                <p className="pj br"><Link to="/webdesign">Service</Link></p>
                <p className="pj br"><Link to="/merkto">Blog</Link></p>
              </div>
            </div>

            {/* Services Section */}
            <div className="col-lg-3 mt-5 boy d-flex justify-content-start col-md-6 col-sm-6">
              <div>
                <h5><b>Our Services</b></h5>
                <p className="pj pt-3 br"><Link to="/webdevelopment">Web Development</Link></p>
                <p className="pj br"><Link to="/mobileappdevelopment">Mobile App Development</Link></p>
                <p className="pj br"><Link to="/webdesignn">Web Design</Link></p>
                <p className="pj br"><Link to="/ecommerce">E-commerce Solutions</Link></p>
                <p className="pj br"><Link to="/digitalmarketing">Digital Marketing</Link></p>
                <p className="pj br"><Link to="/graphicdesign">Graphics Design</Link></p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="col-lg-3 mt-5 boy d-flex justify-content-center col-md-6 col-sm-6">
              <div>
                <h5><b>Contact Us</b></h5>
                <p className="pt-3 mb-0">
                  <span className='spn' onClick={handlePhoneClick}>
                    <i className="fa-solid fa-phone"></i> <p className='mb-3 text-muted pj'>{phoneNumber}</p>
                  </span>
                  <span className='spn' onClick={handleEmailClick}>
                    <i className="fa-solid fa-envelope"></i>
                    <p className='mb-3 text-muted pj'>{emailAddress}</p>
                  </span>
                  <span className='spn' onClick={openGoogleMaps}>
                    <i className="fa-solid fa-location-dot"></i>
                    <p className="mb-0 pj">Vbs Tech Solutions India Pvt Ltd</p>
                    <p className="mb-0 pj">Near North Rapid Station Opp.</p>
                    <p className="mb-0 pj">Delhi - Meerut Road, 201204</p>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
