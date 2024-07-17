import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
export default function Footer() {
  const phoneNumber = '+91 7300720901';
  const emailAddress = 'contact@vbstechsolutions.com';
  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`);
  };
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
  }
  return (
    <div>
      <div class="container-fluid  cor">
        <div class="  footers_section text-dark">
          <div class="row mt-5  text-dark">
            <div class="col-lg-4 mt-5 text-start text-dark col-md-6 col-sm-6 allaresame text-dark mb-5">
              <h5><b>VBSTECH SOLUTIONS</b></h5>
              <p class=" pt-3 pj cd">
                We are completely dedicated to our business. Do not hesitate to contact us at any time, we will be happy to
                implement all your ideas to life.
              </p>
              <div class="d-flex justify-content-evenly col-lg-7">
                <a href="https://www.linkedin.com/company/vbs-tech-solutions"><i class="fa-brands fa-linkedin fs-4"></i></a>
                <a href="https://www.facebook.com/profile.php?id=100095661125928"><i class="fa-brands fa-facebook fs-4"></i></a>
                <a href="https://www.instagram.com/vbstechsolutions/"><i class="fa-brands fa-instagram fs-4"></i></a>
               <a href="https://github.com/VBS-Tech-Solutions-India-Pvt-Ltd"> <i class="fa-brands fa-github  fs-4"></i></a>
              </div>
            </div>
            <div class="col-lg-2 mt-5 d-flex justify-content-center col-md-6 col-sm-6 himu">
              <div>
                <h5> <b>Our Links</b></h5>
                <p class="pj pt-3 br" to="/socialmedia">About </p>
                <p class="pj br">Project </p>
                <p class="pj br">Service </p>
                <p class="pj br">Blog</p>
                <p class="pj br">Contact Us</p>
              </div>
            </div>
            <div class=" col-lg-3 mt-5 boy d-flex justify-content-start col-md-6 col-sm-6">
              <div>
                <h5> <b>Our Services</b></h5>
                <p class="pj  pt-3 br">E-commerce Solutions</p>
                <p class="pj br"> Graphics Design</p>
                <p class="pj br"> Web Development</p>
                <p class="pj br"> Mobile App Development</p>
              </div>
            </div>
            <div class="col-lg-3 mt-5 boy d-flex justify-content-center col-md-6 col-sm-6 ">
              <div>
                <h5> <b>Contact Us</b></h5>
                <p class="pt-3 mb-0">
                  <span className='spn' onClick={handlePhoneClick}>
                    <i class="fa-solid fa-phone"></i> <p className='mb-3 text-muted pj'>{phoneNumber}</p>
                  </span>
                  <span className='spn' onClick={handleEmailClick}>
                    <i className="fa-solid fa-envelope"></i>
                    <p className='mb-3 text-muted pj'>{emailAddress}</p>
                  </span>
                  <span className='spn' onClick={openGoogleMaps}>
                    <div>
                      <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <p className='mb-0 pj'>Vbs Tech Solutions India Pvt Ltd</p>
                      <p className='mb-0 pj'>Near North Rapid station Opp.</p>
                      <p className='mb-0 pj'>Delhi-Meerut Road</p>
                      <p className='mb-0 pj'>201204</p>
                    </div>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}