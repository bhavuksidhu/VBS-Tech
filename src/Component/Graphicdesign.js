import React from 'react'
import './Services.css';
import img1 from '../Images/image17.png';
import img2 from '../Images/image18.png';
import Footer from '../Footer/Footer';

export default function Graphicdesign() {
    return (
        <div>
            <div className='container-fluid text-white back-ground6'>
                <div className='container  home-section6'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <h3 className='h3modify'>Graphic Design
                            </h3>

                        </div>

                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 text-center yu'>
                            <h4 className='h4modify'>Our Services for Graphic Design</h4>
                            <p className='pmodify'>Distinguish your online presence with creative & eye-candy graphics design services. Our expert designers have years of expertise in the domain of designing. We make a unique and memorable design that appeals to and delivers excellence for your brand.
                            You can now easily seize the attention of your target user base & flourish your online business successfully.</p>
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
                                    <p><b>Logo Design
                                    </b></p>
                                    <p className='paradiv'>Our well-designed logos deliver a favorable impact on the audience’s minds & make your business look fantastic.


                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='divwd'>
                                <img src={img2} className='imgdiv1' />
                                <div className='divwd2'>
                                    <p><b>Design Experts</b></p>
                                    <p className='paradiv'>Our team holds the best professional graphic designers. They work passionately in producing an out-of-the-box solution to match your needs.
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
