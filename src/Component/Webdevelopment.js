import React from 'react'
import './Services.css';
import img1 from '../Images/wd1.png';
import img2 from '../Images/wd2.png';
import img3 from '../Images/wd3.png';
import img4 from '../Images/wd4.png';
import Footer from '../Footer/Footer';

export default function Webdevelopment() {
  return (
    <div>
        <div className='container-fluid text-white back-ground6'>
            <div className='container  home-section6'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h3 className='h3modify'>Web Development</h3>

                    </div>

                </div>
            </div>
        </div>
        <div className='container-fluid'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 text-center yu'>
                        <h4 className='h4modify'>Our Services for Web Development</h4>
                        <p className='pmodify'>We are a leading Website Development company offering professional,
                             personalized, and bespoke solutions to our clientele. Developing a website
                              has become crucial for any retailer or traditional brick-and-mortar business.
                               Signup as a seller at Amazon won’t help you reach your goal.
                                You need a user-friendly, safe site that represents your business in the best way possible.
                                 Our web development team has experience with 
                            numerous technology platforms and is dedicated to delivering excellence.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid pt-5'>
            <div className='container'>
                <div className='row bi'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='divwd'>
                            <img src={img1} className='imgdiv1'/>
                            <div className='divwd2'>
                                <p><b>Dynamic & Proven Approach</b></p>
                                <p className='paradiv'>We build a productive and flexible web structure to reach the ever-expanding goals of your business.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='divwd'>
                            <img src={img2} className='imgdiv1'/>
                            <div className='divwd2'>
                                <p><b>Payment Gateway
                                Integration</b></p>
                                <p className='paradiv'>We  enables businesses to accept payments online from anywhere via different channels and devices. Seamlessly start accepting online payments
                                </p>
                            </div>

                        </div>
                    </div>
                   
                 
                </div>
                <div className='row mt-5 bi'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='divwd'>
                            <img src={img3} className='imgdiv1'/>
                            <div className='divwd2'>
                                <p><b>Plugin Development</b></p>
                                <p className='paradiv'>We can help you add a host of powerful features to your website or expand the functions of existing ones with custom plugins.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='divwd'>
                            <img src={img4} className='imgdiv1'/>
                            <div className='divwd2'>
                                <p><b>API Integration & 
                                Development</b></p>
                                <p className='paradiv'>From simple API integration services to complicated or multiple end-points custom API developments, we can build a solution that is simple to use.

                                </p>
                            </div>

                        </div>
                    </div>
                    </div>
            </div>
        </div>
        <Footer/> 
    </div>
  )
}
