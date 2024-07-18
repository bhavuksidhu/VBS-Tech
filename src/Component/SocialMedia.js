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
            <div className='col-lg-6 col-md-6 col-sm-12'>
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
                      <a tabIndex="1" className="elementor-toggle-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">What is Google Adwards ?</a>
                    </div>
                    <div className="collapse" id="collapseExample1">
                      <div className="card card-body border-0">
                        Google AdWords is arguably the most targeted form of advertising out there. It’s so targeted because when people search on Google, they’re essentially telling you exactly what they’re looking for. And that’s where your ad can show up – right alongside those search results!
                        What’s more, it’s also one of the most trackable forms of advertising available – as long as you set up conversion tracking on your website. When you compare this to other forms of advertising like radio and print, it’s easy to see why. With radio and print, it can be tough to determine just how well they’re working for you. Sure, if your store gets busier after running a radio or print ad, you might assume it’s working.
                        But can you accurately calculate the cost per lead or figure out the best time to run your ad? And what if you decide to run both radio and print ads at the same time? It’s pretty much impossible to know which one worked better.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="elementor-toggle-item">
                    <div id="elementor-tab-title-2092" className="elementor-tab-title" data-tab="2" role="button" aria-controls="elementor-tab-content-2092" aria-expanded="false" tabIndex="0" aria-selected="false">
                      <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
                        <span className="elementor-toggle-icon-closed"><i className="fas fa-caret-right"></i></span>
                      </span>
                      <a className="elementor-toggle-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2" tabIndex="2">Is Google Awords Only Search Adverts?</a>
                    </div>
                    <div className="collapse" id="collapseExample2">
                      <div className="card card-body border-0">
                        No, Google AdWords is much more than just a single type of ad! It’s actually an advertising platform that gives you access to a wide range of advertising locations and campaign types. The most commonly talked about type of ad is the Search ad, but there are many other options available as well. For example, there are Display ads, which are the banners you see on websites. There’s also Remarketing, which lets you show ads to people who have already visited your website. And don’t forget about YouTube – you can advertise there too, with both banners and video ads.
                        On top of that, there are many different ad formats to choose from. You can use text display ads, static banners, animated banners, videos, and even lightboxes. With so many options available, you can find the ad format that works best for your specific needs and goals.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="elementor-toggle-item">
                    <div id="elementor-tab-title-2093" className="elementor-tab-title" data-tab="3" role="button" aria-controls="elementor-tab-content-2093" aria-expanded="false" tabIndex="0" aria-selected="false">
                      <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
                        <span className="elementor-toggle-icon-closed"><i className="fas fa-caret-right"></i></span>
                      </span>
                      <a className="elementor-toggle-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3" tabIndex="3">What’s The Difference Between Google AdWords And SEO (Search Engine Optimization)?</a>
                    </div>
                    <div className="collapse" id="collapseExample3">
                      <div className="card card-body border-0">
                        SEO is a long-term game that involves setting up your website and online presence in the right way to attract more organic search and referral traffic. This type of traffic doesn’t cost anything, but you’ll need to invest time and money to get it right.
                        Despite its importance, SEO is often overlooked and underestimated by both businesses and web developers. It should always be a crucial element of your digital marketing mix.
                        On the other hand, Google AdWords is a quick way to bring in targeted traffic to your website. It’s easy to set up and generally faster than SEO when it comes to generating traffic. Both options require ongoing investment, but with AdWords, you’ll only pay for clicks from interested users.
                        With SEO, you need to invest before you can start to see traffic coming in. With Google AdWords, you usually pay only when people click through to your website.
                        Both SEO and AdWords are important. In fact, certain SEO elements can help improve the quality of your AdWords campaigns.
                        It’s worth noting that running paid advertising with Google won’t affect your organic search rankings. However, it may boost the clickthrough rate of your organic listings, as searchers may see your brand in an ad before scrolling down to your organic listing.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="elementor-toggle-item">
                    <div id="elementor-tab-title-2094" className="elementor-tab-title" data-tab="4" role="button" aria-controls="elementor-tab-content-2094" aria-expanded="false" tabIndex="0" aria-selected="false">
                      <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
                        <span className="elementor-toggle-icon-closed"><i className="fas fa-caret-right"></i></span>
                      </span>
                      <a className="elementor-toggle-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" tabIndex="4">Isn’t Awords A Waste Of Money? I’ve Tried It And It ‘Never Worked’</a>
                    </div>
                    <div className="collapse" id="collapseExample4">
                      <div className="card card-body border-0">
                        Running a Google AdWords campaign without knowing how to use the platform can quickly turn into a money pit. I once ran a campaign for a client and within minutes, I was able to save almost 50% of their ad spend. They were serving ads for completely irrelevant search terms!
                        Another client was using a generic Google helpline to run their campaigns, and I was able to cut their cost per click in half – from $2 to $1. They had been spending twice as much as they needed to! It’s not unusual for me to take over an internally managed AdWords account and improve the average clickthrough rate from 1-2% to over 10% (and sometimes even higher). With those results, the returns on ad spend can be many times greater than the initial investment.
                        All of those metrics are great, but I can also help you set up conversion tracking so you can track monetary values. After all, that’s the ultimate metric to measure – how much money your ads are actually generating for your business.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="elementor-toggle-item">
                    <div id="elementor-tab-title-2094" className="elementor-tab-title" data-tab="5" role="button" aria-controls="elementor-tab-content-2094" aria-expanded="false" tabIndex="0" aria-selected="false">
                      <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
                        <span className="elementor-toggle-icon-closed"><i className="fas fa-caret-right"></i></span>
                      </span>
                      <a className="elementor-toggle-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample5" tabIndex="5"> Why Shouldn't I Just Run My Adwords In-House?</a>
                    </div>
                    <div className="collapse" id="collapseExample5">
                      <div className="card card-body border-0">
                        Content for the fourth question goes here.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="elementor-toggle-item">
                    <div id="elementor-tab-title-2094" className="elementor-tab-title" data-tab="6" role="button" aria-controls="elementor-tab-content-2094" aria-expanded="false" tabIndex="0" aria-selected="false">
                      <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
                        <span className="elementor-toggle-icon-closed"><i className="fas fa-caret-right"></i></span>
                      </span>
                      <a className="elementor-toggle-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample4" tabIndex="6">  Why Does A Campaign Need Managed & Optimized Each Month?</a>
                    </div>
                    <div className="collapse" id="collapseExample6">
                      <div className="card card-body border-0">
                        Content for the fourth question goes here.
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
