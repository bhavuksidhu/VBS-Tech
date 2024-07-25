import React from 'react'
import './Services.css';
import img1 from '../Images/image11.png';
import img2 from '../Images/image12.png';
import img3 from '../Images/image13.png';
import img4 from '../Images/image14.png';
import Footer from '../Footer/Footer';

export default function Ecommerce() {
  return (
    <div>
        <div className='container-fluid text-white back-ground6'>
            <div className='container  home-section6'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h3 className='h3modify'>E-Commerce Solutions</h3>

                    </div>

                </div>
            </div>
        </div>
        <div className='container-fluid'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 text-center yu'>
                        <h4 className='h4modify'>Our Services for Ecommerce Web Development
                        </h4>
                        <p className='pmodify'>“WHAT LOOKS & FUNCTION BETTER WILL ALWAYS PERFORM GREAT. “Our eCommerce development services are tailored to meet your unique requirement. A scalable solution that comes with Cross-browser & cross-device compatibility.
                        </p>
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
                                <p><b>Custom E-commerce Development</b></p>
                                <p className='paradiv'>Helping eCommerce & mCommerce businesses increase their ROI with curated & personalized solutions that allow boosting omnichannel presence.

                                </p>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='divwd'>
                            <img src={img2} className='imgdiv1'/>
                            <div className='divwd2'>
                                <p><b>Ready made Ecommerce Web Development</b></p>
                                <p className='paradiv'>Need something fast by maintaining a strict budget? We have got your back. We have the most adaptable, stable, reliable & scalable ready-made eCommerce solution.
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
                                <p><b>ECommerce Maintenance & Support Services</b></p>
                                <p className='paradiv'>ECommerce is the life-and-blood for your businesses & future goal. We can take care of the maintenance part for you so that you can concentrate on your business.

                                </p>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='divwd'>
                            <img src={img4} className='imgdiv1'/>
                            <div className='divwd2'>
                                <p><b>Develop E-Commerce
                                Website</b></p>
                                <p className='paradiv'>Developing an e-commerce website involves creating a user-friendly platform for showcasing products, handling transactions, and managing orders securely online.

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
