import React from 'react'
import './Services.css';
import img1 from '../Images/image5.png';
import img2 from '../Images/image6.png';
import Footer from '../Footer/Footer';

export default function Mobiledevelop() {
    return (
        <div>
            <div className='container-fluid text-white back-ground6'>
                <div className='container  home-section6'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <h3 className='h3modify'>Mobile App Development</h3>

                        </div>

                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 text-center yu'>
                            <h4 className='h4modify'>Our Services for Mobile Apps Development</h4>
                            <p className='pmodify'>Top-notch mobile app development services from the leading mobile app development company. We combine our experience and expertise to offer engaging and functional Apps. Mobile App is here, and for growing business, it’s not a choice, but it’s a “Necessary.”
                                We develop apps with meticulous planning and by using our development team’s experiences and expertise. We have proficient Android & iOS app developers who work round the clock to produce feature-rich mobile apps. Our business offers futuristic and functional mobile apps for various devices and platforms.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid pt-5'>
                <div className='container'>
                    <div className='row bi'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='divwd'>
                                <img src={img1} className='imgdiv1' />
                                <div className='divwd2'>
                                    <p><b>iPhone and iPad Apps
                                    </b></p>
                                    <p className='paradiv'>We are specialists in delivering perfect power and functionality to various iOS applications targeted towards Apple device owners.


                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='divwd'>
                                <img src={img2} className='imgdiv1' />
                                <div className='divwd2'>
                                    <p><b>Android App</b></p>
                                    <p className='paradiv'>Hire an android app developer for your next big idea. We incorporate a plan based on the business objective to create a receptive and popular Android app.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}
