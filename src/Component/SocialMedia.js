import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import img1 from '../Images/about2.png';
import img2 from '../Images/about3.png';
import img3 from '../Images/about4.png';
import img4 from '../Images/about6.png';
import './SocialMedia.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
export default function SocialMedia() {
  // useEffect(() => {
  //   AOS.init({ duration: 1000 });
  // }, []);
  return (
    <div>
      <div className='container-fluid text-white back-ground1'>
        <div className='container home-section1'>
          <div className='row'>
            <div className='col-lg-12'>
              <div>
                <h1 className='h2edit'>About</h1>
              </div>
              <div>
                <p className='pedit '>We provide bespoke web-based solutions to create a robust digital  </p>
                <p className='pedit '>
                  presence. No matter how big or small your need is, we are capable of </p>
                <p className='pedit '>
                  providing world class services.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='container-fluid pt-5'>
        <div className='container'>
          <div className='row  gapes'>
            <div className='col-lg-5 col-md-6 col-sm-12'>
              <div className='img p-3'>
                <img src={img1} className='imgdiv' />
              </div>

            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='seconddiv p-3'>
                <h2><b>About Us</b></h2>
                <p className='mt-3 para'>we are global software development company. founded in the
                  year 2024, we have the agility to provide solutions for your
                  business using smart and innovative technologies. our company
                  has over 20+ employees and professional teams with over 10+
                  years of experience in developing web and mobile applications.</p>

                <p className='para'> With a high-performing and enthusiastic team of specialists,
                  VBSTECH SOLUTIONS provide a complete web-based user interface
                  experience. Our exclusive support team works with immense care
                  and approachability after the project has been handed over to the
                  client.</p>


                <p className='para'> We always aim high and strive relentlessly to achieve success. No
                  matter the size of your company. we ensure to offer dedicated
                  staff and support to meet all your needs. We provide services
                  regarding securing relevant certifications and meeting compliance by offering the best data analysis and data security solutions. </p>

              </div>



            </div>
          </div>
        </div>
      </div>


      <div className='container-fluid pt-5 pb-5' style={{ backgroundColor: "#FAFAFB" }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='div1'>
                <img src={img2} className='imgdiv' />
                <div className='head'>
                  <p><b>Landing pages</b></p>
                  <p className='paradiv'>With years of experience in hand, we have perfected the means of developing impactful landing pages.
                  </p>
                </div>
              </div>

            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='div1'>
                <img src={img3} className='imgdiv' />
                <div className='head'>
                  <p><b>E-commerce websites</b></p>
                  <p className='paradiv'>Get the best E-Commerce development services with the required technical assistance.
                  </p>
                </div>
              </div>


            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='div1'>
                <img src={img4} className='imgdiv' />
                <div className='head'>
                  <p><b>Corporate websites</b></p>
                  <p className='paradiv'>Each corporate website is tailor-made, salable & built to meet the needs & goals of your growing business.
                  </p>
                </div>
              </div>


            </div>
          </div>

        </div>
      </div>




      <section className=" mt-5 elementor-section elementor-top-section elementor-element elementor-element-6b00a87 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6b00a87" data-element_type="section">
        <div className="  mt-5 container elementor-container elementor-column-gap-default">
          <div className="  mt-5 elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a54baff" data-id="a54baff" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated ">
              <div className=" mb-5 elementor-element elementor-element-d7cd4f8 elementor-widget elementor-widget-heading" data-id="d7cd4f8" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default text-center">Frequently Asked Questions.</h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-c783a1f elementor-widget elementor-widget-toggle" data-id="c783a1f" data-element_type="widget" data-widget_type="toggle.default">
                <div className="elementor-widget-container">
                  <div className="elementor-toggle-item">
                    <div id="elementor-tab-title-2091" className="elementor-tab-title" data-tab="1" role="button" aria-controls="elementor-tab-content-2091" aria-expanded="false" tabIndex="0" aria-selected="false">
                      <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
                        <span className="elementor-toggle-icon-closed"><i className="fas fa-caret-right"></i></span>
                      </span>
                      <a tabIndex="1" className="elementor-toggle-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">What types of projects does VBSTECH SOLUTIONS specialize in?</a>
                    </div>
                    <div className="collapse" id="collapseExample1">
                      <div className="card card-body border-0 fs">
                      VBSTECH SOLUTIONS specializes in developing custom web and mobile applications. We focus on creating innovative and smart solutions tailored to your business needs. Our expertise extends to providing comprehensive web-based user interface experiences and ensuring data security and compliance.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="elementor-toggle-item">
                    <div id="elementor-tab-title-2092" className="elementor-tab-title" data-tab="2" role="button" aria-controls="elementor-tab-content-2092" aria-expanded="false" tabIndex="0" aria-selected="false">
                      <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
                        <span className="elementor-toggle-icon-closed"><i className="fas fa-caret-right"></i></span>
                      </span>
                      <a className="elementor-toggle-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2" tabIndex="2">How experienced is your team in software development?</a>
                    </div>
                    <div className="collapse" id="collapseExample2">
                      <div className="card card-body border-0 fs">
                      Our team comprises over 20+ skilled professionals with more than 10 years of experience in developing web and mobile applications. Our collective expertise allows us to handle a wide range of projects with high efficiency and creativity </div>
                    </div>
                  </div>
                  <hr />
                  <div className="elementor-toggle-item">
                    <div id="elementor-tab-title-2093" className="elementor-tab-title" data-tab="3" role="button" aria-controls="elementor-tab-content-2093" aria-expanded="false" tabIndex="0" aria-selected="false">
                      <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
                        <span className="elementor-toggle-icon-closed"><i className="fas fa-caret-right"></i></span>
                      </span>
                      <a className="elementor-toggle-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3" tabIndex="3">What kind of support can we expect after the project is completed?</a>
                    </div>
                    <div className="collapse" id="collapseExample3">
                      <div className="card card-body border-0 fs">
                      After the project is handed over, our dedicated support team ensures that you receive ongoing assistance with immense care and approachability. We are committed to resolving any issues, answering questions, and providing updates as needed to ensure your continued satisfaction.                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="elementor-toggle-item">
                    <div id="elementor-tab-title-2094" className="elementor-tab-title" data-tab="4" role="button" aria-controls="elementor-tab-content-2094" aria-expanded="false" tabIndex="0" aria-selected="false">
                      <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
                        <span className="elementor-toggle-icon-closed"><i className="fas fa-caret-right"></i></span>
                      </span>
                      <a className="elementor-toggle-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" tabIndex="4">Can VBSTECH SOLUTIONS help with compliance and certifications?</a>
                    </div>
                    <div className="collapse" id="collapseExample4">
                      <div className="card card-body border-0 fs">
                      Yes, we offer services related to securing relevant certifications and meeting compliance requirements. Our team provides expert data analysis and security solutions to ensure that your business adheres to industry standards and regulations.                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="elementor-toggle-item">
                    <div id="elementor-tab-title-2094" className="elementor-tab-title" data-tab="5" role="button" aria-controls="elementor-tab-content-2094" aria-expanded="false" tabIndex="0" aria-selected="false">
                      <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
                        <span className="elementor-toggle-icon-closed"><i className="fas fa-caret-right"></i></span>
                      </span>
                      <a className="elementor-toggle-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample5" tabIndex="5">How does VBSTECH SOLUTIONS approach new projects?</a>
                    </div>
                    <div className="collapse" id="collapseExample5">
                      <div className="card card-body border-0 fs">
                      We approach each new project with a focus on understanding your specific business needs and goals. Our agile development process allows us to adapt and innovate throughout the project lifecycle, ensuring that we deliver a solution that meets your expectations and drives success.                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="elementor-toggle-item">
                    <div id="elementor-tab-title-2094" className="elementor-tab-title" data-tab="6" role="button" aria-controls="elementor-tab-content-2094" aria-expanded="false" tabIndex="0" aria-selected="false">
                      <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
                        <span className="elementor-toggle-icon-closed"><i className="fas fa-caret-right"></i></span>
                      </span>
                      <a className="elementor-toggle-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample4" tabIndex="6">Is VBSTECH SOLUTIONS able to handle projects of all sizes?</a>
                    </div>
                    <div className="collapse" id="collapseExample6">
                      <div className="card card-body border-0 fs">
                      Absolutely. Whether you are a small startup or a large enterprise, we tailor our services to fit the size and scope of your project. Our dedicated staff and resources are designed to scale with your needs and provide the support necessary for any project size.
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
