import React ,  { useEffect } from 'react'
import '../App.css';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
          <form>
            <div className="mb-3 row">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Name" required />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="Email Address" required />
              </div>
            </div>
            <div className="mb-3 row">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Company Name" />
              </div>
              <div className="col-md-6">
                <input type="tel" className="form-control" placeholder="Phone Number" required />
              </div>
            </div>
            <div className="mb-3">
              <input type="url" className="form-control" placeholder="URL" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" placeholder="Tell us about your business." rows="4"></textarea>
            </div>
            <div className="text-center mb-4">
              <button type="submit" className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <hr className="custom-hr" />
  <Footer />
    </>
  
  )
}
