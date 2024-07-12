import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import img2 from '../Images/service2.png';
import img3 from '../Images/service3.png';
import img4 from '../Images/service4.png';
import img5 from '../Images/service5.png';
import img6 from '../Images/service6.png';
import img7 from '../Images/service7.png';
import Form from './Form';
import './Webdesign.css';
export default function Webdesign() {
  return (
    <div>
      <Navbar />
      <div className='container-fluid text-white back-ground2'>
        <div className='container home-section2'>
          <div className='row'>
            <div className='col-lg-12'>
              <div>
                <h1 className='h2edit1'>Service</h1>
              </div>
              <div>
                <p className='pedit1 '>We help brands design and build excellent digital products,  </p>
                <p className='pedit1 '>
                  facilitating seamless user experiences across all modern digital </p>
                <p className='pedit1 '>
                  platforms.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='container-fluid pt-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='image'>
                <img src={img2} className='imgji'/>
              </div>

            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='headingdiv'>
                <h3 className='main_headings'>Web Development</h3>
                <p className='heading_texts'>Our Services for Web Development</p>
                <p className='paragraph_texts'>We are a leading Website Development company offering professional, personalized, and bespoke solutions to our clientele. Developing a website has become crucial for any retailer or traditional brick-and-mortar business. Signup as a seller at Amazon won’t help you reach your goal. You need a user-friendly, safe site that represents your business in the best way possible. Our web development team has experience with numerous technology platforms and is dedicated to delivering excellence.</p>
                <p><a href='#' className='know_me'>Know me</a></p>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
