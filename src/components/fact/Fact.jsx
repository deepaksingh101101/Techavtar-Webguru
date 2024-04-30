import fact_right_image from '../../assets/images/video-item-bg.jpg';
import playIcon from '../../assets/images/facts-bg.jpg';
import play from '../../assets/images/play-icon.png'
import React, { useRef, useEffect } from 'react';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Counter from '../counter/Counter';


export default function Fact() {
    gsap.registerPlugin(ScrollTrigger) 
  return (
    <section className="our-facts" style={{ backgroundImage: `url(${playIcon})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {/* <div className="row">
              <div className="col-lg-12">
                <h2>A Few Facts About  <span  style={{color:"#EEA127"}}>TECHAVTAR WEBGURU
                </span>
                </h2>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-12">
                    <div className="count-area-content percentage">
                      <div className="count-digit">94</div>
                      <div className="count-title">Successful Students</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="count-area-content">
                      <div className="count-digit">126</div>
                      <div className="count-title">Current Teachers</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-12">
                    <div className="count-area-content new-students">
                      <div className="count-digit">2345</div>
                      <div className="count-title">New Students</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="count-area-content">
                      <div className="count-digit">32</div>
                      <div className="count-title">Awards</div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}


<div className="row">
    <div className="col-lg-12">
        <h2>A Few Facts About <span style={{ color: "#EEA127" }}>TECHAVTAR WEBGURU</span></h2>
    </div>
    <div className="col-lg-6">
        <div className="row">
            <div className="col-12">
                <div className="count-area-content percentage">
                    <Counter end={94} duration={2} suffix="%" />
                    <div className="count-title">Successful Students</div>
                </div>
            </div>
            <div className="col-12">
                <div className="count-area-content">
                    <Counter end={126} duration={2} />
                    <div className="count-title">Current Teachers</div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-6">
        <div className="row">
            <div className="col-12">
                <div className="count-area-content new-students">
                    <Counter end={2345} duration={2} />
                    <div className="count-title">New Students</div>
                </div>
            </div>
            <div className="col-12">
                <div className="count-area-content">
                    <Counter end={32} duration={2} />
                    <div className="count-title">Awards</div>
                </div>
            </div>
        </div>
    </div>
</div>

          </div>
          <div className="col-lg-6 align-self-center">
            <div className="video-container position-relative">
              {/* You can embed a video or add interactive content here */}
             
              <img src={fact_right_image} className="video" alt="Facts Background" />
              <div className="position-absolute top-50 start-50 ">
              <a href="https://www.youtube.com/watch?v=HndV87XpkWg" target="_blank">
              <img src={play} alt="Play Icon" />
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
