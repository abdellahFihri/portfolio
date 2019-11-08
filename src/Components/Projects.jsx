import React, { Component } from 'react';
import Aos from 'aos';
import belgie1 from  '../img/belgie1.png';
import  belgie2 from '../img/belgie2.png';
import airSelector from '../img/airSelector.png';
import ijs from '../img/ijs-picture.png';


class Projects extends Component {
    
    
    render() {
        Aos.init()
        const {textIce,textBel1,textBel2,textAir,belTitle1,belTitle2,salute}=this.props;
        return (  
            <section id="projects" className="projects-section bg-white">
                       <div className="container">

                 <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                   <div className="col-xl-8 col-lg-7">
                      <a href="https://abdellahfihri.github.io/ijs/" target="_blank" rel="noopener noreferrer">
                        <img id="project "className="img-fluid mb-3 mb-lg-0" src={ijs} alt="img"/></a>
                         </div>
                   <div className="col-xl-4 col-lg-5">
                         <div id="iceDiscription"className="featured-text text-center text-lg-left">
                        <h4  data-aos="zoom-in"  data-aos-duration="3000">Ice cream selector {salute}</h4>
                       {textIce}
                     </div>
                   </div>
                   </div>

     
                    <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                 <div   className="col-lg-6">
                   <a href="https://abdellahfihri.github.io/belgium" rel="noopener noreferrer" target="_blank">
                      <img className="img-fluid" src={belgie1} alt="img"/></a>
                 </div>
                <div className="col-lg-6">
                     <div className="bg-black text-center h-100 project">
                          <div className="d-flex h-100">
                               <div className="project-text w-100 my-auto text-center text-lg-left">
                                  <h4 data-aos="zoom-in"  data-aos-duration="3000" className="text-white">{belTitle1}</h4>
                                     {textBel1}
                         <hr  data-aos="fade-right"  data-aos-duration="3000" className="d-none d-lg-block mb-0 ml-0"/>
                       </div>
                      </div>
                     </div>
                    </div>
                 </div>

     
      <div className="row justify-content-center no-gutters">
        <div className="col-lg-6">
           
        <a href="https://abdellahfihri.github.io/belgium" rel="noopener noreferrer" target="_blank"><img className="img-fluid" src={belgie2} alt="img"/></a> 
        </div>
        <div className="col-lg-6 order-lg-first">
           <div className="bg-black text-center h-100 project">
                    <div className="d-flex h-100">
                        <div className="project-text w-100 my-auto text-center text-lg-right">
                               <h4 data-aos="zoom-in"  data-aos-duration="3000" className="text-white">{belTitle2}</h4>
                                 {textBel2}
                              <hr data-aos="fade-left"  data-aos-duration="3000"
                               className="d-none d-lg-block mb-0 mr-0"/>
                        </div>
                   </div>
             </div>
         </div>
      </div>
        
      <div className="row align-items-center no-gutters mt-5 mb-4 mb-lg-5">
                   <div className="col-xl-4 col-lg-5">
                         <div id="text-right" className="featured-text text-center text-lg-left">
                        <h4 data-aos="zoom-in"  data-aos-duration="3000">The air selector</h4>
                     {textAir}
                     </div>
                   </div>
                   <div className="col-xl-8 col-lg-7">
                     <a href="https://abdellahfihri.github.io/AirSelector/" target="_blank" rel="noopener noreferrer">
                         <img id="project "className="img-fluid mb-3 mb-lg-0"
                          src={airSelector} alt="img"/>
                          </a>
                         </div>
        </div>

    </div>
  </section>
        );
    }
}
 
export default Projects;
