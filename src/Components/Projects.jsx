import React from "react";
import Aos from "aos";
import belgie1 from "../img/webshop.png";
import covid1 from '../img/desktop.png';

import belgie2 from "../img/webshop2.png";

import ijs from "../img/usersTable.png";
import mini_tube from '../img/mini_youtube.png';
import miniTubeVideo from '../Components/videos/mini_youtube.mp4';
import covidMobile from '../Components/videos/covid.mp4';
import DoubleContainer from './projects/doubbleContainerProject';
import Video from './projects/video';

const Projects=( {
  textIce,
  textBel1,
  textBel2,
  textAir,
  belTitle1,
  belTitle2,
  titleIce,
  titleAir,
  style,
  tube:{title1,title2,text1,text2},
  covid
})=> {
  
    Aos.init();
    
    return (
      <section
        style={style}
        id="projects"
        className="projects-section bg-white"
      >
        <div className="container">
          {/* <div className="row align-items-center no-gutters mb-4 mb-lg-5">
            <div className="col-xl-8 col-lg-7">
              <a
                href="https://abdellahfihri.github.io/ijs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  id="project "
                  className="img-fluid mb-3 mb-lg-0"
                  src={ijs}
                  alt="img"
                />
              </a>
            </div>
            <div style={style} className="col-xl-4 col-lg-5">
              <div
                id="iceDiscription"
                className="featured-text text-center text-lg-left"
              >
                <h4 data-aos="zoom-in" data-aos-duration="3000">
                  {" "}
                  {titleIce}
                </h4>
                {textIce}
              </div>
            </div>
          </div> */}

         <DoubleContainer 
         title1={belTitle1} 
         title2={belTitle2}
         text1={textBel1}
         text2={textBel2}
         pic1={belgie1}
         pic2={belgie2}
         href="https://fihri-e-shop.herokuapp.com/shop"
         />

          <div className="row align-items-center no-gutters mt-5 mb-4 mb-lg-5">
            <div className="col-xl-4 col-lg-5">
              <div
                id="text-right"
                className="featured-text text-center text-lg-left"
              >
                <h4 data-aos="zoom-in" data-aos-duration="3000">
                  {titleIce}
                </h4>
                {textIce}
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <a
                href="https://tui.abdellahfihri.now.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  id="project "
                  className="img-fluid mb-3 mb-lg-0"
                  src={ijs}
                  alt="img"
                />
              </a>
            </div>
          </div>
         <DoubleContainer
         pic1={ mini_tube}
         title1={title1}
         title2={title2}
         text1={
           <p
          
           data-aos="fade-up"
           data-aos-duration="3000"
           className="mb-0 text-white-50"
           >
           {text1}
           </p>}
         text2={
          <p
          
          data-aos="fade-up"
          data-aos-duration="3000"
          className="mb-0 text-white-50"
          >
          {text2}
          </p>
         }
         
         href="https://abdellahfihri.github.io/reco-videos/">
         <Video videoSrc={miniTubeVideo}/>
         </DoubleContainer>
         <DoubleContainer
         pic1={covid1}
        //  pic2={covid2}
         title1={covid.title1}
         title2={covid.title2}
         text1={<p
          
          data-aos="fade-up"
          data-aos-duration="3000"
          className="mb-0 text-white-50"
          >
          {covid.text1}
          </p>}
         text2={<p
          
          data-aos="fade-up"
          data-aos-duration="3000"
          className="mb-0 text-white-50"
          >
          {covid.text2}
          </p>}
          href="https://covid-19-stats.abdellahfihri.now.sh/"
         >
            
         <Video videoSrc={covidMobile}/>
           </DoubleContainer>
         
         
         
        </div>
      </section>
    );
  }
export default Projects;
