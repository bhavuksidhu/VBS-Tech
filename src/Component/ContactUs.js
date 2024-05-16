import React ,  { useEffect } from 'react'
import '../App.css';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Form from './Form';
export default function ContactUs() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <>
         <Navbar />
         <div className="container-fluid consultation-form ">
         <div className="row justify-content-center">
        <div className="col-md-8"  data-aos="fade-up">
          <h1 className="text-center my-4 fw-bold">Free Consultation</h1>
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
