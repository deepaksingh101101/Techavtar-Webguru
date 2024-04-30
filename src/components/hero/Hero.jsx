
import heroVideo from '../../assets/images/course-video.mp4'
import { ReactTyped } from "react-typed";
import Services from '../services/Services';

export default function Hero() {

  
  return (
<>
<section className="section main-banner" id="top" data-section="section1">
    {/* <video autoplay muted loop id="bg-video">
        <source src={heroVideo} type="video/mp4" />
    </video> */}
      <video autoPlay loop muted id="bg-video">
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    <div className="video-overlay header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="caption">
            <h6>Hello Learners</h6>
            <h2 id='auto-input'>
  <ReactTyped
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


            <p>Welcome to Techavtar Webguru platform where learning meets innovation. We provide comprehensive courses covering MERN stack, MEAN stack, artificial intelligence (AI), and more offered by  <a rel="nofollow" href="https://templatemo.com/page/1" target="_blank">TECHAVTAR.</a> </p>
            <div className="main-button-red">
                <div className="scroll-to-section"><a href="#contact">Join Us Now!</a></div>
            </div>
        </div>
            </div>
          </div>
        </div>
    </div>
</section>
{/* // <!-- ***** Main Banner Area End ***** --> */}


<Services/>
</>
  )
}
