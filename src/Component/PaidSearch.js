import React, { useState } from 'react';
import './PaidSearch.css';
import { Link } from 'react-router-dom';
import img1 from '../Images/Frame 33.png';
import img2 from '../Images/Frame 37.png';
import img3 from '../Images/Frame 38.png';
import img4 from '../Images/Frame 39.png';
import img5 from '../Images/canvas5.png';
import img6 from '../Images/img6.png';
import img7 from '../Images/img7.png';
import img8 from '../Images/img8.png';
import img9 from '../Images/img9.png';
import img10 from '../Images/img10.png';
import img11 from '../Images/img11.png';
import img12 from '../Images/img12.png';
import Footer from '../Footer/Footer';

export default function PaidSearch() {
    const [flipped, setFlipped] = useState(null);

    const toggleFlip = (index) => {
        setFlipped(prev => (prev === index ? null : index));
    };

    return (
        <div>
            <div className='container-fluid text-white back-groundpr'>
                <div className='container home-sectionpr'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <h3 className='h3modify'>Project</h3>
                        </div>
                        <div>
                            <p className='peditpr'>Take a sneak peek into our previous work!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 text-center yu'>
                            <h4 className='h2editpr'>Take a Dive into Our all Portfolio</h4>
                            <p className='pmodify'>Our development portfolio is growing at a healthy speed. We are sharing some of the project details where we were actively involved in the digital transformation.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid pt-5'>
                <div className='container'>
                    <div className='row'>
                        {/* Project 1 */}
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <Link to="https://worshipserve.com/" target="_blank">
                                <div className={`card flip ${flipped === 1 ? 'flipped' : ''}`} onClick={() => toggleFlip(1)}>
                                    <div className='card-inner'>
                                        <div className='front'>
                                            <img src={img1} className='imgdivpr' alt="Project 1" />
                                        </div>
                                        <div className='back'>
                                            <h2>Project 1: </h2>
                                            <h3>Sharetribe,Spree</h3>
                    
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Project 2 */}
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <Link to="https://boldly.app/" target="_blank">
                                <div className={`card flip ${flipped === 2 ? 'flipped' : ''}`} onClick={() => toggleFlip(2)}>
                                    <div className='card-inner'>
                                        <div className='front'>
                                            <img src={img2} className='imgdivpr' alt="Project 2" />
                                        </div>
                                        <div className='back'>
                                            <h2>Project 2: </h2>
                                            <h3>Shopify,wordpress,Wix</h3>
                                            
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        {/* Project 3 */}
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <Link to="https://www.nanovest.io/en/" target="_blank">
                                <div className={`card flip ${flipped === 3 ? 'flipped' : ''}`} onClick={() => toggleFlip(3)}>
                                    <div className='card-inner'>
                                        <div className='front'>
                                            <img src={img3} className='imgdivpr' alt="Project 3" />
                                        </div>
                                        <div className='back'>
                                            <h2>Project 3: </h2>
                                            <h3>JavaScript,React,NEXT,Node</h3>
                                            
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Project 4 */}
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <Link to="https://canvascultures.com/" target="_blank">
                                <div className={`card flip ${flipped === 4 ? 'flipped' : ''}`} onClick={() => toggleFlip(4)}>
                                    <div className='card-inner'>
                                        <div className='front'>
                                            <img src={img4} className='imgdivpr' alt="Project 4" />
                                        </div>
                                        <div className='back'>
                                            <h2>Project 4: </h2>
                                            <h3>ROR</h3>
                                            
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        {/* Project 5 */}
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <Link to="https://canvascultures.com/" target="_blank">
                                <div className={`card flip ${flipped === 5 ? 'flipped' : ''}`} onClick={() => toggleFlip(5)}>
                                    <div className='card-inner'>
                                        <div className='front'>
                                            <img src={img5} className='imgdivpr' alt="Project 5" />
                                        </div>
                                        <div className='back'>
                                            <h2>Project 5: </h2>
                                            <h3>ROR</h3>
                                            
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Project 6 */}
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <Link to="https://collidedigital.com/" target="_blank">
                                <div className={`card flip ${flipped === 6 ? 'flipped' : ''}`} onClick={() => toggleFlip(6)}>
                                    <div className='card-inner'>
                                        <div className='front'>
                                            <img src={img6} className='imgdivpr' alt="Project 6" />
                                        </div>
                                        <div className='back'>
                                            <h2>Project 6: </h2>
                                            <h3>PHP LARAVEL</h3>
                                           
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        {/* Project 7 */}
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <Link to="https://www.emerson.com/en-us/commercial-residential/grind2energy-food-waste-solution" target="_blank">
                                <div className={`card flip ${flipped === 7 ? 'flipped' : ''}`} onClick={() => toggleFlip(7)}>
                                    <div className='card-inner'>
                                        <div className='front'>
                                            <img src={img7} className='imgdivpr' alt="Project 7" />
                                        </div>
                                        <div className='back'>
                                            <h2>Project 7: </h2>
                                            <h3>JavaScript,React,Angular</h3>
                                            
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Project 8 */}
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <Link to="https://www.stepbuildingsupplies.co.za/" target="_blank">
                                <div className={`card flip ${flipped === 8 ? 'flipped' : ''}`} onClick={() => toggleFlip(8)}>
                                    <div className='card-inner'>
                                        <div className='front'>
                                            <img src={img8} className='imgdivpr' alt="Project 8" />
                                        </div>
                                        <div className='back'>
                                            <h2>Project 8:</h2>
                                            <h3>Shopify,wordpress,Woocommerce</h3>
                                            
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        {/* Project 9 */}
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <Link to="https://new.trystoryboard.com/" target="_blank">
                                <div className={`card flip ${flipped === 9 ? 'flipped' : ''}`} onClick={() => toggleFlip(9)}>
                                    <div className='card-inner'>
                                        <div className='front'>
                                            <img src={img9} className='imgdivpr' alt="Project 9" />
                                        </div>
                                        <div className='back'>
                                            <h2>Project 9: </h2>
                                            <h3>Android, IOS, Web Development</h3>
                                           
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Project 10 */}
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <Link to="https://www.bigcattravelinsurance.com/" target="_blank">
                                <div className={`card flip ${flipped === 10 ? 'flipped' : ''}`} onClick={() => toggleFlip(10)}>
                                    <div className='card-inner'>
                                        <div className='front'>
                                            <img src={img10} className='imgdivpr' alt="Project 10" />
                                        </div>
                                        <div className='back'>
                                            <h2>Project 10: </h2>
                                            <h3>Shopify,wordpress,Woocommerce</h3>
                                           
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        {/* Project 11 */}
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <Link to="https://shopkaire.com/" target="_blank">
                                <div className={`card flip ${flipped === 11 ? 'flipped' : ''}`} onClick={() => toggleFlip(11)}>
                                    <div className='card-inner'>
                                        <div className='front'>
                                            <img src={img11} className='imgdivpr' alt="Project 11" />
                                        </div>
                                        <div className='back'>
                                            <h2>Project 11:</h2>
                                            <h3>neto_ecommerce,Magneto</h3>
                                            
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Project 12 */}
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <Link to="https://shegerianconniff.com/" target="_blank">
                                <div className={`card flip ${flipped === 12 ? 'flipped' : ''}`} onClick={() => toggleFlip(12)}>
                                    <div className='card-inner'>
                                        <div className='front'>
                                            <img src={img12} className='imgdivpr' alt="Project 12" />
                                        </div>
                                        <div className='back'>
                                            <h2>Project 12: </h2>
                                            <h3>Designing</h3>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
