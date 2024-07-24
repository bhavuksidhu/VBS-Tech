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
            </div>
          </div>

        </div>
      </div>
         <PricingCards/>
         
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
