import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import playIcon from '../../assets/images/giovanni-gagliardi-fvT3t9iOaJI-unsplash.jpg';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
 
    gsap.from(".anim",{
        opacity:0,
        stagger:0.2,
        duration:1,
        scale:0,
        scrollTrigger:{
            trigger:".anim",
            scroller:"body",
            start:"top 60%",
            markers:true
        }
    })
    gsap.to(".anim",{
        opacity:1,
        stagger:0.2,
        duration:1,
        scale:1,
        scrollTrigger:{
            trigger:".anim",
            scroller:"body",
            start:"top 60%",
            markers:true
        }
    })


  }, []);

  const image = "https://freefrontend.dev/assets/square.png";

  return (
    <section className="py-0 our-facts overlay_" style={{ backgroundImage: `url(${playIcon})` }}>
      <div className="overlay py-5">
        <div className="container position-relative" style={{ zIndex: "9999" }}>
          <div className="row gx-4 align-items-center justify-content-between">
            <div className="col-md-5 order-2 order-md-1">
              <div className="mt-5 mt-md-0 left_about ">
                <span className=" text-bg-danger px-4 py-1  position-relative">Our Story</span>
                <h2 className="display-5  fw-bold mt-3 mb-4" style={{ color: "#EEA127" }}>About Us</h2>
                <p className="lead text-white position-relative">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .</p>
                <p className="lead text-white position-relative">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
            <div className="col-md-6 offset-md-1 order-1 order-md-2">
              <div className="row gx-2 gx-lg-3">
                <div className="col-6">
                  <div className="mb-2"><img className="img-fluid rounded-3 anim" alt="" src={image} /></div>
                </div>
                <div className="col-6">
                  <div className="mb-2"><img className="img-fluid rounded-3 anim" alt="" src={image} /></div>
                </div>
                <div className="col-6">
                  <div className="mb-2"><img className="img-fluid rounded-3 anim" alt="" src={image} /></div>
                </div>
                <div className="col-6">
                  <div className="mb-2"><img className="img-fluid rounded-3 anim" alt="" src={image} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
