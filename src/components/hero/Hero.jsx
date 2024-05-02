
import heroVideo from '../../assets/images/course-video.mp4'
import { ReactTyped } from "react-typed";
import Services from '../services/Services';
import About from '../aboutUs/About';
import gsap from 'gsap';
import { useEffect } from 'react';

export default function Hero() {

  useEffect(() => {

    gsap.from(".main-banner", { opacity: 0, y: 1000 });
    gsap.to(".main-banner", { opacity: 1, y: 0, duration: 1 });

    gsap.from(".header-area", { opacity: 0, x: -1000, duration: 1 });
    gsap.to(".header-area", { opacity: 1, x: 0, delay: 1 });

    // Animation logic
    var tl = gsap.timeline();
    tl.from('.a1,  #auto-input span', {
      x: -1000,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1
    });

    
  
    tl.to('.a1, #auto-input span, .caption h6' , {
      x: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1
    });

    // Cleanup function
    return () => {
      // Cleanup logic (if needed)
    };
  }, []); // Empty dependency array to run effect only once when component mounts

  return (
<>
<section className="section main-banner" id="top" data-section="section1">
    {/* <video autoplay muted loop id="bg-video">
        <source src={heroVideo} type="video/mp4" />
    </video> */}
      <video className='vid' autoPlay loop muted id="bg-video">
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    <div className="video-overlay header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="caption">
            <h6 className='a1' >Hello Learners</h6>
            <h2 id='auto-input'>
  <ReactTyped
  className='a1'
 strings={[
  "Welcome to Techavtar WebGuru",
  "Master the Art of Web Development",
  "Code with Us",
  "Let Your Inner Developer Beast Roar"]}

    typeSpeed={40}
    backSpeed={50}
    loop
  />
</h2>


            <p  className='a1' >Welcome to Techavtar Webguru platform where learning meets innovation. We provide comprehensive courses covering MERN stack, MEAN stack, artificial intelligence (AI), and more offered by  <a rel="nofollow" href="https://templatemo.com/page/1" target="_blank">TECHAVTAR.</a> </p>
            <div className="main-button-red a1">
                <div className="scroll-to-section"><a href="#contact">Join Us Now!</a></div>
            </div>
        </div>
            </div>
          </div>
        </div>
    </div>
</section>
{/* // <!-- ***** Main Banner Area End ***** --> */}

<About/>
<Services/>
</>
  )
}
