import React from 'react'
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
    return (
        <div>
            <div className='container-fluid text-white back-groundpr'>
                <div className='container  home-sectionpr'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <h3 className='h3modify'>Project</h3>

                        </div>
                        <div>
                <p className='peditpr'>Take a sneak peek into our previous work!
                </p>
              </div>

                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 text-center yu'>
                            <h4 className='h2editpr'>Take a Dive into Our all Portfolio</h4>
                            <p className='pmodify'>Our development portfolio is growing at a healthy speed. We are sharing some of the project details where we were actively involved in the digital transformation.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid pt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='divwd'>
                            <Link to="https://worshipserve.com/" target="https://worshipserve.com/">
                                <img src={img1} className='imgdivpr' /></Link>

                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 arr'>
                            <div className='divwd'>
                            <Link to="https://boldly.app/" target="https://boldly.app/">
                                <img src={img2} className='imgdivpr' /></Link>

                            </div>
                        </div>

                    </div>
                    <div className='row mt-5'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='divwd'>
                            <Link to="https://www.nanovest.io/en/" target="https://www.nanovest.io/en/"> 
                                <img src={img3} className='imgdivpr' /></Link>

                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 arr'>
                            <div className='divwd'>
                            <Link to="https://canvascultures.com/" target="https://canvascultures.com/">
                                <img src={img4} className='imgdivpr' /></Link>

                            </div>
                        </div>

                    </div>
                    <div className='row mt-5'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='divwd'>
                            <Link to="https://canvascultures.com/" target="https://canvascultures.com/"> 
                                <img src={img5} className='imgdivpr' /></Link>

                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 arr'>
                            <div className='divwd'>
                            <Link to="https://collidedigital.com/" target="https://collidedigital.com/">
                                <img src={img6} className='imgdivpr' /></Link>
                            </div>
                        </div>

                    </div>
                    <div className='row mt-5'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='divwd'>
                            <Link to="https://www.emerson.com/en-us/commercial-residential/grind2energy-food-waste-solution" target="https://www.emerson.com/en-us/commercial-residential/grind2energy-food-waste-solution"> 
                                <img src={img7} className='imgdivpr' /></Link>

                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 arr'>
                            <div className='divwd'>
                            <Link to="https://www.stepbuildingsupplies.co.za/" target="https://www.stepbuildingsupplies.co.za/">
                                <img src={img8} className='imgdivpr' /></Link>
                            </div>
                        </div>

                    </div>
                    <div className='row mt-5'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='divwd'>
                            <Link to="https://new.trystoryboard.com/" target="https://new.trystoryboard.com/"> 
                                <img src={img9} className='imgdivpr' /></Link>

                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 arr'>
                            <div className='divwd'>
                            <Link to="https://www.bigcattravelinsurance.com/" target="https://www.bigcattravelinsurance.com/">
                                <img src={img10} className='imgdivpr' /></Link>
                            </div>
                        </div>

                    </div>
                    <div className='row mt-5'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='divwd'>
                            <Link to="https://shopkaire.com/" target="https://shopkaire.com/"> 
                                <img src={img11} className='imgdivpr' /></Link>

                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 arr'>
                            <div className='divwd'>
                            <Link to="https://shegerianconniff.com/" target="https://shegerianconniff.com/">
                                <img src={img12} className='imgdivpr' /></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}