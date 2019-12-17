import React from "react";
import Aos from "aos";
import belgie1 from "../img/belgie1.png";
import belgie2 from "../img/belgie2.png";
import airSelector from "../img/airSelector.png";
import ijs from "../img/ijs-picture.png";
import mini_tube from '../img/mini_youtube.png'
import miniTubeVideo from '../Components/videos/mini_youtube.mp4'
import DoubleContainer from './projects/doubbleContainerProject'
import Video from './projects/video'

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
  tube:{title1,title2,text1,text2}
})=> {
  
    Aos.init();
    
    return (
      <section
        style={style}
        id="projects"
        className="projects-section bg-white"
      >
        <div className="container">
          <div className="row align-items-center no-gutters mb-4 mb-lg-5">
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
          </div>

         <DoubleContainer 
         title1={belTitle1} 
         title2={belTitle2}
         text1={textBel1}
         text2={textBel2}
         pic1={belgie1}
         pic2={belgie2}
         href="https://abdellahfihri.github.io/belgium"/>

          <div className="row align-items-center no-gutters mt-5 mb-4 mb-lg-5">
            <div className="col-xl-4 col-lg-5">
              <div
                id="text-right"
                className="featured-text text-center text-lg-left"
              >
                <h4 data-aos="zoom-in" data-aos-duration="3000">
                  {titleAir}
                </h4>
                {textAir}
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <a
                href="https://abdellahfihri.github.io/AirSelector/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  id="project "
                  className="img-fluid mb-3 mb-lg-0"
                  src={airSelector}
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
         
         href="https://abdellahfihri.github.io/react.video.app/">
         <Video videoSrc={miniTubeVideo}/>
         </DoubleContainer>
         
         
         
        </div>
      </section>
    );
  }
export default Projects;
