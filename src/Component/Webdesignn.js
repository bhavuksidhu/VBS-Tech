import React from 'react'
import './Services.css';
import img1 from '../Images/wd1.png';
import img2 from '../Images/wd2.png';
import img3 from '../Images/wd3.png';
import img4 from '../Images/wd4.png';
import Footer from '../Footer/Footer';

export default function Webdesignn() {
  return (
    <div>
        <div className='container-fluid text-white back-ground6'>
            <div className='container  home-section6'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h3 className='h3modify'>Web Design</h3>

                    </div>

                </div>
            </div>
        </div>
        <div className='container-fluid'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 text-center yu'>
                        <h4 className='h4modify'>Our Services for Web Design</h4>
                        <p className='pmodify'>We create personalized, engaging, & interactive website designs. We make a visual aspect that perfectly matches your brand image. We have a team of graphic designers who are excelled in showing creativity in every graphic design project.
                        We build beautiful and interactive website designs for all. Our web design service ensures increased traffic and conversion rates so that your business can excel.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid pt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='divwd'>
                            <img src={img1} className='imgdiv1'/>
                            <div className='divwd2'>
                                <p><b>Responsive Web 
Design
</b></p>
                                <p className='paradiv'>We make web pages render well on a variety of devices. Responsive web design is the demand of today’s business world & we fulfil it

                                </p>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='divwd'>
                            <img src={img2} className='imgdiv1'/>
                            <div className='divwd2'>
                                <p><b>Custom Website 
                                Design</b></p>
                                <p className='paradiv'>For start-ups & well-established organizations, we make web designs for everyone. But, we don’t just design; we build your brands’ reputation!
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className='row mt-5'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='divwd'>
                            <img src={img3} className='imgdiv1'/>
                            <div className='divwd2'>
                                <p><b>Landing Page Design
                                </b></p>
                                <p className='paradiv'>Your landing page represents your website. And we make the page more engaging so you can reap the benefit of boosted traffic & ROI.

                                </p>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='divwd'>
                            <img src={img4} className='imgdiv1'/>
                            <div className='divwd2'>
                                <p><b>Redesign Services</b></p>
                                <p className='paradiv'> Need a fresh start? We can help you get affordable redesign services & offer a new look to enhance users’ engagement

                                </p>
                            </div>

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
