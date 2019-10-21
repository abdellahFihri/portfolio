import React, { Component } from 'react';
import Aos from 'aos';
import belgie1 from  '../img/belgie1.png';
import  belgie2 from '../img/belgie2.png';
import airSelector from '../img/airSelector.png';
import ijs from '../img/ijs-picture.png';


class Projects extends Component {
    constructor(props){
        super()
    }
    render() {
        console.log(this.props.belgium) 
        Aos.init()
        return (  
            <section id="projects" className="projects-section bg-light">
                       <div className="container">

                 <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                   <div className="col-xl-8 col-lg-7">
                       <img    id="project "className="img-fluid mb-3 mb-lg-0" src={ijs} alt="img"/>
                         </div>
                   <div className="col-xl-4 col-lg-5">
                         <div id="iceDiscription"className="featured-text text-center text-lg-left">
                        <h4  data-aos="fade-up">Ice cream selector</h4>
                       <p   data-aos="fade-up"
     data-aos-duration="3000"id="projectDiscription" className="text-50 mb-0">
                           This ice cream selector exercise was  good to test our sense of logic and conditionals,
                            we had to set a limit of 1 ball minimum and 3 balls maximum per vessel,but i've taken this exercise
                            a step further by setting a second vessel option that adds a second maximum (4 balls) depending
                            on which vessel is chosen at the very begin.
                            after the selection validation an alert appears to tell give us a 
                            summary of our selection,or an error message in case invalid selections.</p>
                     </div>
                   </div>
                   </div>

     
                    <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                 <div   className="col-lg-6">
                    <img    className="img-fluid" src={belgie1} alt="img"/>
                 </div>
                <div className="col-lg-6">
                     <div className="bg-black text-center h-100 project">
                          <div className="d-flex h-100">
                               <div className="project-text w-100 my-auto text-center text-lg-left">
                                  <h4 data-aos="fade-up" className="text-white">Belgium flag</h4>
                                     <p   data-aos="fade-up"
     data-aos-duration="3000"className="mb-0 text-white-50">
                                         This exercise was about responsivity. We see in here that the flag expands to take about 60% of the view 
                                         with belgian fries in the middle of it.
                                     </p>
                         <hr  data-aos="fade-right"  data-aos-duration="3000" className="d-none d-lg-block mb-0 ml-0"/>
                     </div>
                      </div>
                     </div>
                    </div>
                 </div>

     
      <div className="row justify-content-center no-gutters">
        <div className="col-lg-6">
           
         <img   className="img-fluid" src={belgie2} alt="img"/>
        </div>
        <div className="col-lg-6 order-lg-first">
          <div className="bg-black text-center h-100 project">
                    <div className="d-flex h-100">
                        <div className="project-text w-100 my-auto text-center text-lg-right">
                               <h4 data-aos="fade-up" className="text-white">Belgium flag resized</h4>
                                 <p  data-aos="fade-up"
     data-aos-duration="3000"className="mb-0 text-white-50">
                                     after making the browser window smaller, at some range the belgian flag will shrink to the middle of the page, the
                                      red color will go below, and the fries will turn into manneke piss.
                                    
                                 </p>
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
                        <h4 data-aos="fade-up">The air selector</h4>
                       <p  data-aos="fade-up"
     data-aos-duration="3000"id="projectDiscription" className="text-50 mb-0">
                           This exercise was quite challenging,working with the time to determine the prices on tickets was interessting. Setting
                            the start price as 1000€, The price decreases by 1% each day ahead of the actual day. By each purchased ticket the initial 
                            price must decrease by 10%, And yet the last 2 passengers will have to pay double of the initial price after the discounts. <br/>
                            Yet if the chosen travel date is the actual date, the price will be 1000€ without any discounts nor discounts after a ticket purchase. <br/>
                            And if the initial price after daily discount of 1 % will go bellow the 100€, then there will be a limit of 100€ as minimum per ticket. Knowing that the available tickets are 10  and the passengers must not exeed this limit.

                       </p>
                     </div>
                   </div>
                   <div className="col-xl-8 col-lg-7">
                       <img id="project "className="img-fluid mb-3 mb-lg-0"
                          src={airSelector} alt="img"/>
                         </div>
        </div>

    </div>
  </section>
        );
    }
}
 
export default Projects;
