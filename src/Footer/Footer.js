import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer>
    <div class="container">
        <div class="footer-top">
            <div class="row">
                <div class="col-md-6 col-lg-3 about-footer">
                    <h3>We are a team of digital marketing professionals passionate about helping businesses thrive in the digital environment.</h3>
                    <ul>
                        <li><a href="tel:(010) 1234 4321"><i class="fas fa-phone fa-flip-horizontal"></i>(010) 1234 4321</a></li>
                        <li><i class="fas fa-map-marker-alt"></i>
                            1 / 105 Bay Lights,
                            <br/>Lorem Ipsum,
                            <br/>LIC 3201
                        </li>
                    </ul>
                    <a href="" class="btn red-btn">Book Now</a>
                </div>
                <div class="col-md-6 col-lg-2 page-more-info">
                    <div class="footer-title">
                        <h4>Page links</h4>
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Term & Conditions</a></li>
                      {/* <li><a href="#">Privacy</a></li>
                      <li><a href="#">Policy</a></li> */}
                    </ul>
                </div>

                <div class="col-md-6 col-lg-3 page-more-info">
                    <div class="footer-title">
                        <h4>More Info</h4>
                    </div>
                    <ul>
                        <li><a href="#">Lorem ipsum</a></li>
                        <li><a href="#">Dolor sit amet</a></li>
                        <li><a href="#">Consectetur Adipisicing </a></li>
                        <li><a href="#">Ed do eiusmod tempor incididunt</a></li>
                    </ul>
                </div>
                <div class="col-md-6 col-lg-4 open-hours">
                    <div class="footer-title">
                        <h4>Open hours</h4>
                        <ul class="footer-social">
                            <li><a href="" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="" target="_blank"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>

                        </ul>
                    </div>
                    <table class="table">
                        <tbody>
                            <tr>
                                <td><i class="far fa-clock"></i>Monday Thursday</td>
                                <td>9:00am - 5:00pm</td>
                            </tr>
                            <tr>
                                <td><i class="far fa-clock"></i>Friday</td>
                                <td>9:00am - 4:00pm</td>
                            </tr>
                            <tr>
                                <td><i class="far fa-clock"></i>Sturday</td>
                                <td>9:00am - 1:30pm</td>
                            </tr>
                            <tr>
                                <td><i class="far fa-clock"></i>Sunday</td>
                                <td>9:30am - 12:00pm</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr/>
                    <div class="footer-logo">

                    <table>
                        <tbody>
                            <tr className='race'>
                                <td><img src="/Assets/footer/imageplaystore.png"/></td>
                                <td><img src="/Assets/footer/imageplaystore.png"/></td>
                                <td><img src="/Assets/footer/imageplaystore.png"/></td>
                                <td><img src="/Assets/footer/imageplaystore.png"/></td>
                                </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
    
    </div>
</footer>
    <div class="footer-policy">
            <div class="row m-0">
                <div class="col-sm-12 text-center">
                    <p>Lorem ipsum  @ 2024 All rights reserved</p>
                </div>
            </div>
        </div>
    </div>
  )
}
