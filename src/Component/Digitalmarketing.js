import React from 'react'
import './Services.css';
import img1 from '../Images/image15.png';
import img2 from '../Images/image16.png';
import Footer from '../Footer/Footer';

export default function Digitalmarketing() {
    return (
        <div>
            <div className='container-fluid text-white back-ground6'>
                <div className='container  home-section6'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <h3 className='h3modify'>Digital Marketing</h3>

                        </div>

                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 text-center yu'>
                            <h4 className='h4modify'>Our Services for Digital Marketing</h4>
                            <p className='pmodify'>The right Digital marketing ensures that new buyers and potential clients can find your business. It’s also what you require to guarantee that the wonderful site you own and invested in gets an audience on the web. Our expert digital marketers are the best at what they do. The marketing can deploy sound digital marketing strategies to enhance the rankings and drive targeted traffic to your website.</p>
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
                                    <p><b>SEO Services
                                    </b></p>
                                    <p className='paradiv'>We ensure that your website gets good rankings in Google, Baidu, Bing, and other major search engines to guarantee a growing user base.



                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='divwd'>
                                <img src={img2} className='imgdiv1' />
                                <div className='divwd2'>
                                    <p><b>Social Media Marketing</b></p>
                                    <p className='paradiv'>A professional social media marketing organization to offers you the right & curated solution to all of your social media marketing problems.
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
