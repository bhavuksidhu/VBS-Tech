import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './LandingPage.css';
import img2 from '../Images/part2img1.png';
import img3 from '../Images/part2img2.png';
import img4 from '../Images/part2img3.png';
import img5 from '../Images/part2img4.png';
import img6 from '../Images/part2img5.png';
import img7 from '../Images/part3img1.png';
import img8 from '../Images/part3img2.png';
import img9 from '../Images/part3img3.png';
import img10 from '../Images/part3img4.png';
import img11 from '../Images/part3img5.png';
import img12 from '../Images/part3img6.png';
import img13 from '../Images/part4img1.png';
import img14 from '../Images/part4img2.png';
import img15 from '../Images/part5img1.png';
import img16 from '../Images/part5img2.png';
import img17 from '../Images/part5img3.png';
import img18 from '../Images/part6img1.png';
import img19 from '../Images/part6img2.png';
import img20 from '../Images/part6img3.png';
import img21 from '../Images/part7img1.png';
import img22 from '../Images/part7img2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Rating } from 'react-simple-star-rating'

export default function LandingPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  }

  const onPointerEnter = () => {
    console.log('Enter');
  }

  const onPointerLeave = () => {
    setHover(0);
    console.log('Leave');
  }

  const onPointerMove = (value, index) => {
    setHover(value);
    console.log(value, index);
  }
  return (
    <div>
      <Navbar />
      <div className='container-fluid text-white back-ground'>
        <div className='container home-section'>
          <div className='row'>
            <div className='col-lg-12'>
              <div>
                <h1 className='h2edit'>We Scale Brands</h1>
              </div>
              <div>
                <p className='pedit '>Our track record speaks for itself – our clients have seen an average YoY</p>
                <p className='pedit '>
                  revenue increase of 90%.Let us put our expertise to work for your </p>
                <p className='pedit '>
                  business and see the results for yourself.</p>
              </div>
              <div>
                   <button class="btn btn-primary " id="green1" type="submit" >Get Started</button>
                   


                  </div>
            </div>
          </div>

        </div>
      </div>
      <section className='container-fluid'>
        <div className=''>
          <hr className='line' />
          <div className='d-flex containers'>

            <div className='google d-flex align-items-center'>
              <img src={img2} className='imgphoto' />
            </div>
            <div className='google d-flex align-items-center'>
              <img src={img3} className='imgphoto' />
            </div>
            <div className='google d-flex align-items-center'>
              <img src={img4} className='imgphoto'/>
            </div>
            <div className='google d-flex align-items-center'>
              <img src={img5} className='imgphoto' />
            </div>
            <div className='google d-flex align-items-center'>
              <img src={img6} className='imgphoto' />
            </div>
          </div>

        </div>
        <hr className='line' />

      </section>
      <section className='advertisment_section heading_text'>
        <div data-aos="fade-up">
          <h2 className='text'>What we can do to help you</h2>
        </div>
      </section>
      <section className=' container'>

        <div className='row add_new'>
          <div className='col-lg-4 col-md-12 col-sm-12'>
            <div className=''>

              <div className='icon_for_content w-100 d-flex justify-content-center'>
                <div className='abc'>
                  <img src={img7} />
                </div>
              </div>
              <div className='heading_name'>
                <h2 className='text-center'>Website Development</h2>
              </div>
              <div className='paragraph_content'>
                <p>Our team of skilled professionals specializes in creating responsive, user-friendly websites that drive engagement and growth for your business. Let us build your online presence with cutting-edge design and seamless functionality. </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12'>
            <div className=''>

              <div className='icon_for_content w-100 d-flex justify-content-center'>
                <div className='abc'>
                  <img src={img8} />
                </div>
              </div>
              <div className='heading_name '>
                <h2 className='text-center'>CRM Development</h2>
              </div>
              <div className='paragraph_content'>
                <p>Our experienced team excels in creating customized CRM solutions that streamline your business processes and enhance customer relationships. Empower your organization with a CRM system tailored to your specific needs. </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12'>
            <div className=''>

              <div className='icon_for_content w-100 d-flex justify-content-center'>
                <div className='abc'>
                  <img src={img9} />
                </div>
              </div>
              <div className='heading_name' >
                <h2 className='text-center'>Saas Development</h2>
              </div>
              <div className='paragraph_content'>
                <p>Our dedicated team specializes in building scalable, secure, and user-friendly SaaS applications tailored to your business needs. Transform your ideas into powerful cloud-based solutions with our expert development services. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container '>
        <div className='row add_new'>
          <div className='col-lg-4 col-md-12 col-sm-12'>
            <div className=''>

              <div className='icon_for_content w-100 d-flex justify-content-center'>
                <div className='abc'>
                  <img src={img10} />
                </div>
              </div>
              <div className='heading_name'>
                <h2 className='text-center'>UI UX Design</h2>
              </div>
              <div className='paragraph_content'>
                <p>Our creative team excels in crafting intuitive, visually stunning interfaces that enhance user experience and drive engagement. Elevate your digital presence with our expert UI/UX design services. </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12'>
            <div className=''>

              <div className='icon_for_content w-100 d-flex justify-content-center'>
                <div className='abc'>
                  <img src={img11} />
                </div>
              </div>
              <div className='heading_name'>
                <h2 className='text-center'>Ecommerce Development</h2>
              </div>
              <div className='paragraph_content'>
                <p>Our specialized team creates robust, user-friendly online stores that boost sales and enhance the shopping experience. Transform your business with our tailored e-commerce solutions. </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12'>
            <div className=''>

              <div className='icon_for_content w-100 d-flex justify-content-center'>
                <div className='abc'>
                  <img src={img12} />
                </div>
              </div>
              <div className='heading_name'>
                <h2 className='text-center'>Hire Dedicated Developer</h2>
              </div>
              <div className='paragraph_content'>
                <p>Our highly skilled developers are available for dedicated hiring, ensuring your projects receive focused expertise and timely delivery. Boost your team's capabilities with our experienced professionals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='container pt-5 pb-5' style={{ backgroundColor: "#FAFAFB" }}>
        <section className='container'>
          <div className=''>
            <div className='row'>
              <div className='col-lg-6 d-flex mt-5 justify-content-center align-items-center'>
                <div className=''>
                  <div className='heading' >
                    <div className='heading' data-aos="fade-up">
                      <h1 className='heading_text_content'>
                        when You Win I win
                      </h1>
                    </div>

                    <p className='paragraph'>
                      At VBSTECH SOLUTIONS, we believe that every local business can achieve big things. Our digital marketing agency specializes in crafting customized strategies that prioritize people and drive results. Let us help put your business on the map and propel you to the next stage of your journey.         </p>
                  </div>
                  <div className='btns'>
                    <button className='button_for_start'>
                      Contact Us
                    </button>
                  </div>
                </div>

              </div>
              <div className='col-lg-6 mt-5'>
                <div className='landing_page_ section_cont'>
                  <div className='main_class_conts'>
                    <div className='img_section'>
                      <img src='/Assets/footer/Color-08.png' />
                    </div>
                    <div className='section_conts'>
                      <div className='leaf' >
                        <h2 className='mb-0'>Leaf</h2>
                      </div>
                      <div className='add_heading' data-aos="fade-up">
                        <h2>4X Email Sales</h2>
                      </div>
                    </div>
                  </div>
                  <div className='main_class_conts'>
                    <div className='img_section'>
                      <img src='/Assets/footer/Color-08.png' />
                    </div>
                    <div className='section_conts'>
                      <div className='leaf' >
                        <h2 className='mb-0'>Human Optimization Center Walnut Creek</h2>
                      </div>
                      <div className='add_heading' data-aos="fade-up">
                        <h2>2X Appointments</h2>
                      </div>
                    </div>
                  </div>
                  <div className='main_class_conts'>
                    <div className='img_section'>
                      <img src='/Assets/footer/Color-08.png' />
                    </div>
                    <div className='section_conts'>
                      <div className='leaf' >
                        <h2 className='mb-0'>PLTA Speech</h2>
                      </div>
                      <div className='add_heading' data-aos="fade-up">
                        <h2>3X Organic Traffic</h2>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='container'>
          <div className='row add_new_class_reverse'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='position-relative add_costume_Increase containet_holder mt-4'>
                <div className='add_website_conversions' >
                  <h2>Increase in website conversions</h2>
                </div>
                <div className=''>
                  <span>
                    <div></div>
                  </span>
                </div>
                <div className='Everything'>
                  <p>“Everything has improved. The redesign we did represents our brand, and the Facebook ads has made us a market leader. The SEO work continues to bring people to our site with content that shows improvement with each monthly report.” </p>
                </div>
                <div>
                  <div className='add_website_conversions_Strategies' data-aos="fade-up">
                    <h2>Strategies:</h2>
                  </div>
                  <ul>
                    <li><i class="fa-solid fa-check pe-3" style={{ color: "#FFD43B", }}></i> Facebook Ads</li>
                    <li><i class="fa-solid fa-check pe-3" style={{ color: "#FFD43B", }}></i> Google</li>
                    <li><i class="fa-solid fa-check pe-3" style={{ color: "#FFD43B", }}></i> Content Marketing</li>
                    <li><i class="fa-solid fa-check pe-3" style={{ color: "#FFD43B", }}></i> SEO</li>
                  </ul>
                </div>
                <div className='mt-4 btns'>
                  <button className='button_for_start'>Get started</button>

                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className=''>
                <img src={img13}></img>
              </div>
            </div>
          </div>
        </section>
        <section className='container'>
          <div className='row add_new_class_reverse'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className=''>
                <img src={img14}></img>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='position-relative add_costume_Increase containet_holder mt-4'>
                <div className='add_website_conversions' data-aos="fade-up">
                  <h2>Increase in website conversions</h2>
                </div>
                <div className=''>
                  <span>
                    <div></div>
                  </span>
                </div>
                <div className='Everything'>
                  <p>“Everything has improved. The redesign we did represents our brand, and the Facebook ads has made us a market leader. The SEO work continues to bring people to our site with content that shows improvement with each monthly report.” </p>
                </div>
                <div>
                  <div className='add_website_conversions_Strategies' data-aos="fade-up">
                    <h2>Strategies:</h2>
                  </div>
                  <ul>
                    <li><i class="fa-solid fa-check pe-3" style={{ color: "#FFD43B", }}></i> Facebook Ads</li>
                    <li><i class="fa-solid fa-check pe-3" style={{ color: "#FFD43B", }}></i> Google</li>
                    <li><i class="fa-solid fa-check pe-3" style={{ color: "#FFD43B", }}></i> Content Marketing</li>
                    <li><i class="fa-solid fa-check pe-3" style={{ color: "#FFD43B", }}></i> SEO</li>
                  </ul>
                </div>
                <div className='mt-4 btns'>
                  <button className='button_for_start'>Get started</button>

                </div>
              </div>
            </div>

          </div>
        </section>
      </div>

      <div className='container pt-5 pb-5 rww' style={{ backgroundColor: "white" }}>
        <div className='text-center' >
          <h2><b>How We Work</b></h2>
          <section>

            <div className='container added  border border-primary'>

              <div className='row add_new_class_reverse'>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                  <div>
                    <img src={img15} />
                  </div>
                </div>
                <div className='col-lg-6  col-md-12 col-sm-12 rww'>
                  <div className='main_containt'>
                    <div className='Outline' data-aos="fade-up">
                      <h2><b>1. Discussing the project</b></h2>
                    </div>
                    <div className='Collide'>
                      <p>We discuss the project, draw up a statement of work,negotiate all the details and the budget.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className='container added border border-primary'>
              <div className='row'>

                <div className='col-lg-6  col-md-12 col-sm-12 rww'>
                  <div className='main_containt'>

                    <div className='Outline' data-aos="fade-up">
                      <h2><b>2. Creating and coordinating
                        the layout</b></h2>
                    </div>
                    <div className='Collide'>
                      <p>We make the wireframe and design. Take approval before proceeding further.</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                  <div>
                    <img src={img16} />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className='container added  border border-primary'>
              <div className='row add_new_class_reverse'>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                  <div>
                    <img src={img17} />
                  </div>
                </div>
                <div className='col-lg-6  col-md-12 col-sm-12 rww'>
                  <div className='main_containt'>
                    <div className='Outline' data-aos="fade-up">
                      <h2><b>3. Creating a website and
                        setting up SEO</b></h2>
                    </div>
                    <div className='Collide'>
                      <p>After development, we test until everything reaches a satisfactory level.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>


        </div>


      </div>



      <div className='container-fluid pt-5 pb-5' style={{ backgroundColor: "#FAFAFB" }}>
        <div class="container " >
          <div class="text-center">
            <p className='uy'><b>Learn new technology</b></p>
            <h1><b>Read our blog</b></h1>
          </div>
          <div class="row mt-5 py">
            <div class="col-lg-4 col-md-6 py">
              <div class="card" style={{ width: " 18rem", border: "none" }}>
                <img src={img18} class="card-img-top" alt="..." style={{ borderRadius: "17px" }} />
                <div class="card-body mt-3 text-start">
                  <h6 class="card-text mt-3"> <b>Most popular design systems to learn from in 2022</b></h6>
                  <p className='uy'>Design Systems</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 py">
              <div class="card" style={{ width: "18rem", border: "none" }}>
                <img src={img19} class="card-img-top" alt="..." style={{ borderRadius: "17px" }} />
                <div class="card-body mt-3 text-start">
                  <h6 class="card-text mt-3"> <b>Understanding accessibility makes you a better </b></h6>
                  <p className='uy'>Accessibility</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 py">
              <div class="card" style={{ width: "18rem", border: "none" }}>
                <img src={img20} class="card-img-top" alt="..." style={{ borderRadius: "17px" }} />
                <div class="card-body mt-3 text-start">
                  <h6 class="card-text mt-3"> <b>15 best tools that will help you build your website</b></h6>
                  <p className='uy'>Tech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div class="container pt-5">
        <div class="text-center">
          <p className='uy'><b>3940+ Happy Landingfolio Users</b></p>
          <h1><b>Don’t just take our words</b></h1>
        </div>
        <div class="row rows d-flex justify-content-center">
          <div class="col-lg-6 col-md-6 mt-5">
            <div class="">
              <div class="row g-0">
                <div class="col-lg-4 col-md-12 col-sm-6">
                  <img src={img21} class="rounded-start rs" alt="..." />
                </div>
                <div class="col-lg-8 col-md-12 col-sm-6  column">
                  <div class="card-body text-start">
                    <div>
                      {[1, 2, 3, 4, 5].map((star, index) => {
                        return (
                          <span
                            key={index}
                            style={{
                              cursor: 'pointer',
                              color: (hover || rating) >= star ? 'blue' : 'blue',
                              fontSize: '20px', // Adjust the font size to make the stars smaller
                            }}
                            onClick={() => handleRating(star)}
                            onMouseEnter={() => onPointerMove(star, index)}
                            onMouseLeave={onPointerLeave}
                          >
                            ★
                          </span>
                        );
                      })}
                    </div>
                    <p class="card-text">"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."</p>
                    <p class="card-text"><small class="text-muted"> <b className='pe-2 text-dark'>Alex</b>Ceo of system Agency</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 mt-5">
            <div class=" ">
              <div class="row g-0">
                <div class="col-lg-4 col-md-12 col-sm-6">
                  <img src={img22} class="rounded-start rs" alt="..." />
                </div>
                <div class="col-lg-8 col-md-12 col-sm-6 column">
                  <div class="card-body text-start">
                    <div>
                      {[1, 2, 3, 4, 5].map((star, index) => {
                        return (
                          <span
                            key={index}
                            style={{
                              cursor: 'pointer',
                              color: (hover || rating) >= star ? 'blue' : 'blue',
                              fontSize: '20px', // Adjust the font size to make the stars smaller
                            }}
                            onClick={() => handleRating(star)}
                            onMouseEnter={() => onPointerMove(star, index)}
                            onMouseLeave={onPointerLeave}
                          >
                            ★
                          </span>
                        );
                      })}
                    </div>
                    <p class="card-text">"I would really say, VBSTECH SOLUTIONS has converted Hyatt from “people driven” company which inturn increased our Productivity and Business growth"

                    </p>
                    <p class="card-text"><small class="text-muted"> <b className='pe-2 text-dark'>Ammy</b>Founder & CEO at Foodkarma</small></p>
                  </div>
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
