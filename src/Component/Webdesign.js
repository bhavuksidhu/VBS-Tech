import React from 'react';
import { Link } from 'react-router-dom';
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
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={img2}
              alt="Web Development"
              className="images"
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="add_aclass">
              <h1>
                <b style={{ color: '#000000' }}>Web Development</b>
              </h1>
              <p className="mt-4">
                <h5 className="textcolor">Our Services for Web Development</h5>
              </p>
              <p className="datasize mt-4">
                We are a leading Website Development company offering professional,
                personalized, and bespoke solutions to our clientele. Developing a
                website has become crucial for any retailer or traditional
                brick-and-mortar business. Signup as a seller at Amazon won’t help you
                reach your goal. You need a user-friendly, safe site that represents
                your business in the best way possible. Our web development team has
                experience with numerous technology platforms and is dedicated to
                delivering excellence.
              </p>
              <p className="d-flex">
                <Link to="/webdevelopment" className="btn btn-primary fs-5">
                  Know Now
                </Link>{' '}
                <i className="fa-solid fa-arrow-right fs-3 pt-2 text-primary"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row reverse">
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h1>
                <b style={{ color: '#000000' }}>Mobile App Development</b>
              </h1>
              <p className="mt-4">
                <h5 className="textcolor">Our Services for Mobile Apps Development</h5>
              </p>
              <p className="datasize">
                Top-notch mobile app development services from the leading mobile app
                development company. We combine our experience and expertise to offer
                engaging and functional Apps. Mobile App is here, and for growing
                business, it’s not a choice, but it’s a “Necessary.” We develop apps
                with meticulous planning and by using our development team’s
                experiences and expertise. We have proficient Android & iOS app
                developers who work round the clock to produce feature-rich mobile
                apps. Our business offers futuristic and functional mobile apps for
                various devices and platforms.
              </p>
              <p className="d-flex">
                <Link to="/mobileappdevelopment" className="btn btn-primary fs-5">
                  Know Now
                </Link>{' '}
                <i className="fa-solid fa-arrow-right fs-3 pt-2 text-primary"></i>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={img3}
              alt="Mobile App Development"
              className="images"
            />
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={img4}
              alt="Web Development"
              className="images"
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="add_aclass">
              <h1>
                <b style={{ color: '#000000' }}>Web Design</b>
              </h1>
              <p className="mt-4">
                <h5 className="textcolor">Our Services for Web Design</h5>
              </p>
              <p className="datasize mt-4">
                We create personalized, engaging, & interactive website designs.
                 We make a visual aspect that perfectly matches your brand image.
                  We have a team of graphic designers who are excelled in showing creativity
                   in every graphic design project. We build beautiful and interactive website designs
                    for all. Our web design service ensures increased traffic and conversion rates so 
                    that your business can excel.
              </p>
              <p className="d-flex">
                <Link to="/webdesignn" className="btn btn-primary  fs-5">
                  Know Now
                </Link>{' '}
                <i className="fa-solid fa-arrow-right fs-3 pt-2 text-primary"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row reverse">
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h1>
                <b style={{ color: '#000000' }}>E-commerce Solutions
                </b>
              </h1>
              <p className="mt-4">
                <h5 className="textcolor">Our Services for Ecommerce Web Development</h5>
              </p>
              <p className="datasize">
              “WHAT LOOKS & FUNCTION BETTER WILL ALWAYS PERFORM GREAT.
               “Our eCommerce development services are tailored to meet your unique requirement.
               A scalable solution that comes with Cross-browser & cross-device compatibility.
              </p>
              <p className="d-flex">
                <Link to="/ecommerce" className="btn btn-primary fs-5">
                  Know Now
                </Link>{' '}
                <i className="fa-solid fa-arrow-right fs-3 pt-2 text-primary"></i>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={img5}
              alt="Mobile App Development"
              className="images"
            />
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={img6}
              alt="Web Development"
              className="images"
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="add_aclass">
              <h1>
                <b style={{ color: '#000000' }}>Digital Marketing</b>
              </h1>
              <p className="mt-4">
                <h5 className="textcolor">Our Services for Digital Marketing</h5>
              </p>
              <p className="datasize mt-4">
              The right Digital marketing ensures that new buyers and potential clients can find your business.
               It’s also what you require to guarantee that the wonderful site you own and invested in
                gets an audience on the web. Our expert digital marketers are the best at what they do.
                 The marketing can deploy sound digital marketing strategies to enhance the rankings and 
                 drive targeted traffic to your website.
              </p>
              <p className="d-flex">
                <Link to="/digitalmarketing" className="btn btn-primary fs-5">
                  Know Now
                </Link>{' '}
                <i className="fa-solid fa-arrow-right fs-3 pt-2 text-primary"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row reverse">
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h1>
                <b style={{ color: '#000000' }}>Graphics Design
                </b>
              </h1>
              <p className="mt-4">
                <h5 className="textcolor">Our Services for Graphic Design</h5>
              </p>
              <p className="datasize">
              Distinguish your online presence with creative & eye-candy graphics design services.
               Our expert designers have years of expertise in the domain of designing. 
               We make a unique and memorable design that appeals to and delivers excellence for your brand.
                You can now easily seize the attention of your target user base & flourish your online business
                 successfully.
              </p>
              <p className="d-flex">
                <Link to="/graphicdesign"  className="btn btn-primary fs-5">
                  Know Now
                </Link>{' '}
                <i className="fa-solid fa-arrow-right fs-3 pt-2 text-primary"></i>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={img7}
              alt="Mobile App Development"
              className="images"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
