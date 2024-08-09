import React ,  { useEffect } from 'react'
import '../App.css';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';
import PricingCards from './PricingCards';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Form from './Form';
import './ContactUs.css';
import Mobiledevelop from './Mobiledevelop';
export default function ContactUs() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

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
      }
  return (
    <>
         <div className='container-fluid text-white back-ground4'>
        <div className='container home-section4'>
          <div className='row'>
            <div className='col-lg-12'>
              <div>
                <h1 className='h2edit4'>Contact</h1>
              </div>
              <div>
                <p className='pedit4'>Get answers to your questions and queries. We are available 24/7.
                </p>
              </div>
              <div className='logoes pt-3'>
              <span className='spn' onClick={handlePhoneClick}>
                    <i class="fa-solid fa-phone"></i>
                  </span>
                  <span className='spn' onClick={handleEmailClick}>
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <span className='spn' onClick={openGoogleMaps}>
                    <div>

                      <i class="fa-solid fa-location-dot"></i>
                    </div>
                  </span>
              </div>
            </div>
          </div>

        </div>
      </div>         
         <div className="container-fluid consultation-form  prent">
         <div className="row justify-content-center">
        <div className="col-md-8"  data-aos="fade-up">
          <h2 className="text-center my-4 colr" > <b>Free Consultation</b></h2>
          <p className=" h4">We’re looking forward to connecting with you! Let us know who you are and we’ll be in touch right away.</p>
        <Form />
       
        </div>
        </div>
        </div>
        <hr className="custom-hr" />
  <Footer />
    </>
  
  )
}
