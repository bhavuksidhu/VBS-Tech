import React ,  { useEffect } from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
export default function LandingPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
    <Navbar />
    <section className=''>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6 d-flex mt-5 justify-content-center align-items-center '>
            <div>
            <div className='heading'>
            <div  data-aos="fade-up">
            <h1 className='heading_text_content' >
We scale brands
            </h1>
            </div>
           
            <p className='paragraph'>
            Our track record speaks for itself – our clients have seen an average YoY revenue increase of 90%. Let us put our expertise to work for your business and see the results for yourself. 
            </p>
            </div>
            <div>
                <button className='button_for_start'> 
                Get started
                </button>
            </div> 
            </div>
               
            </div>
            <div className='col-lg-6 mt-5'>
<div className='landing_page_iamge'>
    <img src='/Assets/footer/landingpage.jpg'/>
</div>
</div>
        </div>
      </div>
    </section>
    <section className='conatiner'>
        <div className=''>
        <hr />
        <div className='d-flex containers'>
      
        <div className='google'>
        <h2>CERTIFIED PARTNERS</h2>
        </div>       
           
               <div className='google'>
                <img src='/Assets/footer/imagesgoogle.jpeg'/>
               </div>
               <div className='google'>
                <img src='/Assets/footer/imagesgoogle.jpeg'/>
               </div>
               <div className='google'>
                <img src='/Assets/footer/imagesgoogle.jpeg'/>
               </div>
               <div className='google'>
                <img src='/Assets/footer/imagesgoogle.jpeg'/>
               </div>
             
            </div>
            
        </div>
        <hr />
    </section>
     <section className='advertisment_section container'>
      <div data-aos="fade-up">
        <h2>What we can do to help you</h2>
      </div>
      <div className='row add_new'>
        <div className='col-lg-4 col-md-12 col-sm-12'>
<div className='containet_holder'>
 
  <div className='icon_for_content w-100 d-flex justify-content-center'>
  <div className='abc'>
  <img src='/Assets/footer/imagesphone.png' />
  </div>
  </div>
  <div className='heading_name'>
  <h2>Facebook Advertising</h2>
</div>
  <div className='paragraph_content'>
    <p>We specialize in local business Facebook Ads that bring in customers, not just traffic. Let us tailor a strategy to your needs and goals, and see real results for your business. </p>
  </div>
</div>
        </div>
        <div className='col-lg-4 col-md-12 col-sm-12'>
<div className='containet_holder'>
 
  <div className='icon_for_content w-100 d-flex justify-content-center'>
  <div className='abc'>
  <img src='/Assets/footer/imagesphone.png' />
  </div>
  </div>
  <div className='heading_name '>
  <h2>Facebook Advertising</h2>
</div>
  <div className='paragraph_content'>
    <p>We specialize in local business Facebook Ads that bring in customers, not just traffic. Let us tailor a strategy to your needs and goals, and see real results for your business. </p>
  </div>
</div>
        </div>
        <div className='col-lg-4 col-md-12 col-sm-12'>
<div className='containet_holder'>
 
  <div className='icon_for_content w-100 d-flex justify-content-center'>
  <div className='abc'>
  <img src='/Assets/footer/imagesphone.png' />
  </div>
  </div>
  <div className='heading_name' >
  <h2>Facebook Advertising</h2>
</div>
  <div className='paragraph_content'>
    <p>We specialize in local business Facebook Ads that bring in customers, not just traffic. Let us tailor a strategy to your needs and goals, and see real results for your business. </p>
  </div>
</div>
        </div>
      </div>
     </section>
     <section className='container '>
     <div className='row add_new'>
     <div className='col-lg-4 col-md-12 col-sm-12'>
<div className='containet_holder'>
 
  <div className='icon_for_content w-100 d-flex justify-content-center'>
  <div className='abc'>
  <img src='/Assets/footer/imagesphone.png' />
  </div>
  </div>
  <div className='heading_name'>
  <h2>Facebook Advertising</h2>
</div>
  <div className='paragraph_content'>
    <p>We specialize in local business Facebook Ads that bring in customers, not just traffic. Let us tailor a strategy to your needs and goals, and see real results for your business. </p>
  </div>
</div>
        </div>
        <div className='col-lg-4 col-md-12 col-sm-12'>
<div className='containet_holder'>
 
  <div className='icon_for_content w-100 d-flex justify-content-center'>
  <div className='abc'>
  <img src='/Assets/footer/imagesphone.png' />
  </div>
  </div>
  <div className='heading_name'>
  <h2>Facebook Advertising</h2>
</div>
  <div className='paragraph_content'>
    <p>We specialize in local business Facebook Ads that bring in customers, not just traffic. Let us tailor a strategy to your needs and goals, and see real results for your business. </p>
  </div>
</div>
        </div>
        <div className='col-lg-4 col-md-12 col-sm-12'>
<div className='containet_holder'>
 
  <div className='icon_for_content w-100 d-flex justify-content-center'>
  <div className='abc'>
  <img src='/Assets/footer/imagesphone.png' />
  </div>
  </div>
  <div className='heading_name'>
  <h2>Facebook Advertising</h2>
</div>
  <div className='paragraph_content'>
    <p>We specialize in local business Facebook Ads that bring in customers, not just traffic. Let us tailor a strategy to your needs and goals, and see real results for your business. </p>
  </div>
</div>
        </div>
      </div>
     </section>
     <section className='container'>
    <div className=''>
        <div className='row'>
            <div className='col-lg-6 d-flex mt-5 justify-content-center align-items-center'>
            <div>
            <div className='heading' >
            <div className='heading' data-aos="fade-up">
            <h1 className='heading_text_content'>
when You Win I win 
            </h1>
            </div>
           
            <p className='paragraph'>
            At Collide Digital, we believe that every local business can achieve big things. Our digital marketing agency specializes in crafting customized strategies that prioritize people and drive results. Let us help put your business on the map and propel you to the next stage of your journey.             </p>
            </div>
            <div>
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
      <div className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <div className='position-relative add_costume_Increase'>
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
      <li><i class="fa-solid fa-check pe-3" style={{color: "#FFD43B",}}></i> Facebook Ads</li>
      <li><i class="fa-solid fa-check pe-3" style={{color: "#FFD43B",}}></i> Google</li>
      <li><i class="fa-solid fa-check pe-3" style={{color: "#FFD43B",}}></i> Content Marketing</li>
      <li><i class="fa-solid fa-check pe-3" style={{color: "#FFD43B",}}></i> SEO</li>
    </ul>
              </div>
              <div className='mt-4'>
              <button className='button_for_start'>Get started</button>

              </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <div className=''>
            <img src='/Assets/footer/FTP-works.jpg'></img>
          </div> 
        </div>
      </div>
    </section>
    <section className='container'>
      <div className='row'>
      <div className='col-lg-6 col-md-12 col-sm-12'>
          <div className=''>
            <img src='/Assets/footer/FTP-works.jpg'></img>
          </div> 
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <div className='position-relative add_costume_Increase'>
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
      <li><i class="fa-solid fa-check pe-3" style={{color: "#FFD43B",}}></i> Facebook Ads</li>
      <li><i class="fa-solid fa-check pe-3" style={{color: "#FFD43B",}}></i> Google</li>
      <li><i class="fa-solid fa-check pe-3" style={{color: "#FFD43B",}}></i> Content Marketing</li>
      <li><i class="fa-solid fa-check pe-3" style={{color: "#FFD43B",}}></i> SEO</li>
    </ul>
              </div>
              <div className='mt-4'>
              <button className='button_for_start'>Get started</button>

              </div>
          </div>
        </div>
       
      </div>
    </section>
    <section className=''>
    <div className=''>
        <div className='heading_section' data-aos="fade-up">
          <h2 className='text-center p-3'>You should talk to us if you are....</h2>
        </div>
      </div>
    </section>
    <section className='container'>
      <div className='row'>
        <div className='col-lg-3 col-md-12 col-sm-12 border border-primary'>
<div className='add_frustrated m-4' data-aos="fade-up">
  <h2>Frustrated with low online leads or sales</h2>
</div>
        </div>
        <div className='col-lg-3 col-md-12 col-sm-12  border border-primary'>
        <div className='add_frustrated m-4' data-aos="fade-up">
  <h2>Frustrated with low online leads or sales</h2>
</div>
          </div>
          <div className='col-lg-3 col-md-12 col-sm-12 border border-primary'>
          <div className='add_frustrated m-4' data-aos="fade-up">
  <h2>Frustrated with low online leads or sales</h2>
</div>
          </div>
          <div className='col-lg-3 col-md-12 col-sm-12 border border-primary'>
          <div className='add_frustrated m-4' data-aos="fade-up">
  <h2>Frustrated with low online leads or sales</h2>
</div>
          </div>
      </div>
    </section>
    <section className='container'>
      <div className='row mb-4'>
        <div className='col-lg-3 col-md-12 col-sm-12 border border-primary'>
<div className='add_frustrated m-4' data-aos="fade-up">
  <h2>Frustrated with low online leads or sales</h2>
</div>
        </div>
        <div className='col-lg-3 col-md-12 col-sm-12 border border-primary'>
        <div className='add_frustrated m-4' data-aos="fade-up">
  <h2>Frustrated with low online leads or sales</h2>
</div>
          </div>
          <div className='col-lg-3 col-md-12 col-sm-12 border border-primary'>
          <div className='add_frustrated m-4' data-aos="fade-up">
  <h2>Frustrated with low online leads or sales</h2>
</div>
          </div>
          <div className='col-lg-3 col-md-12 col-sm-12 border border-primary'>
          <div className='add_frustrated m-4' data-aos="fade-up">
  <h2>Frustrated with low online leads or sales</h2>
</div>
          </div>
      </div>
    </section>
    <section>
      <div className='container added  border border-primary'>
        <div className='row'>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <div>
              <img  src='/Assets/footer/TDV_M86_04-1536x1024 (1).png'/>
            </div>
          </div>
          <div className='col-lg-6  col-md-12 col-sm-12'>
            <div className='main_containt'>
              <div className='process'>
                <span>Our process</span>
              </div>
              <div className='expect' data-aos="fade-up">
                <h2> What to expect</h2>
              </div>
              <div className='Outline'>
<h2>1. Outline your business goals</h2>
              </div>
              <div className='Collide'>
                <p>Collide Digital will collaborate with you to create a detailed business brief that defines your specific needs and objectives.</p>
              </div>
              <div className='btnn'>
                <button  className='button_for_start'>Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className='container added border border-primary'>
        <div className='row'>
        
          <div className='col-lg-6  col-md-12 col-sm-12'>
            <div className='main_containt'>
             
              <div className='Outline' data-aos="fade-up">
<h2>2. Match your needs with an expert</h2>
              </div>
              <div className='Collide'>
                <p>Collide Digital will collaborate with you to create a detailed business brief that defines your specific needs and objectives.</p>
              </div>
              <div className='btnn'>
                <button  className='button_for_start'>Contact Us</button>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <div>
              <img  src='/Assets/footer/TDV_M86_04-1536x1024 (1).png'/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className='container added  border border-primary'>
        <div className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
            <div>
              <img  src='/Assets/footer/TDV_M86_04-1536x1024 (1).png'/>
            </div>
          </div>
          <div className='col-lg-6  col-md-12 col-sm-12'>
            <div className='main_containt'>
              <div className='Outline' data-aos="fade-up">
<h2>3. Ensure consistent growth with ongoing strategy and results monitoring</h2>
              </div>
              <div className='Collide'>
                <p>Collide Digital will collaborate with you to create a detailed business brief that defines your specific needs and objectives.</p>
              </div>
              <div className='btnn'>
                <button  className='button_for_start'>Contact Us</button>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </section>
    <section className='mb-4'>
      <div className='container  ' data-aos="fade-up">
        <h2 className='text-center'>What Clients Say About Us</h2>
      </div>
      <div  className='text-center p-2'>
      Curious about what real clients have to say about working with the Collide Digital team?
       Check out our reviews on Yelp or Google to hear firsthand about their experiences with us.

      </div>
    </section>
    <section className='container add_price_content'>
      <div className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12  border border-primary'>
        <div className='added_for_padding'>
        <div className='beat ' data-aos="fade-up">
            <h2>
            "Can't beat the price!"
            </h2>
          </div>
          <div className='great'>
            <p>
Dennis and team have been great to work with…and you cant beat the price. We didn’t think our little company would be able to afford website help, but their pricing plans helped make it happen. I’m glad we reached out to them! </p>
          </div>
          <div className='Lou' data-aos="fade-up">
            <h2>Lou M.</h2>
          </div>
          <div className='Radio'>
            <h2>CEO, State School Radio</h2>
          </div>
        </div>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12  border border-primary'>
        <div className='added_for_padding'>
        <div className='beat ' data-aos="fade-up">
            <h2>
            "Can't beat the price!"
            </h2>
          </div>
          <div className='great'>
            <p>
Dennis and team have been great to work with…and you cant beat the price. We didn’t think our little company would be able to afford website help, but their pricing plans helped make it happen. I’m glad we reached out to them! </p>
          </div>
          <div className='Lou'>
            <h2>Lou M.</h2>
          </div>
          <div className='Radio'>
            <h2>CEO, State School Radio</h2>
          </div>
        </div>
        </div>
           </div>
    </section>
    <Footer />
    </div>
  )
}
