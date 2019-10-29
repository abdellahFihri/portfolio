import React, { Component } from 'react';
import Aos from 'aos';
class About extends Component {
    constructor(props){
        super()    
    }
    render() {
        const {salute,avatar}=this.props;
        Aos.init()
        return ( 
            
            <section id="about" className="about-section text-center">
            <div className="container">
              <div className="row">
              <div id="avatar" className="col-md-4">
                 <img  data-aos="fade-right"  data-aos-duration="3000" src={avatar} alt="avatar"/>
                  Name: Abdellah Fihri <br/>
                  Birth: 22/11/1984 <br/>
                  Living in: Ostende <br/>
                  
                </div>
                <div className="col-lg 8">
                  <h2 id="salute" data-aos="zoom-in"  data-aos-duration="3000" className="text-white mb-4"> {salute}</h2>
                  <hr  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000"id="hr"/>
                  <p data-aos="fade-up"
     data-aos-duration="3000" className="text-white-50">
                  Leren duurt levens lang.
IT is steeds mijn grootste interesse geweest. Van jongs af aan hield ik me bezig met het repareren van computers, verdiepte ik me in de wereld van internet of things en startte ik met het programmeren van kleine webapplicaties. Wannneer ik meer en meer in aanraking kwam met programmeren, besefte ik me vooral hier verder in te willen ontwikkelen. Vandaar dat ik ervoor koos de opleiding front-end developer te volgen bij INTEC BRUSSEL. Momenteel versterk ik mijn kennis van Javascript, stap voor stap wil ik me meer talen eigen maken. 
                    </p>
                 </div>
              <img src="img/ipad.png" className="img-fluid" alt=""/>
              </div>
            </div>
            
          </section>
         );
    }
}
 
export default About;