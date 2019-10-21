/* eslint-disable react/jsx-no-target-blank */
import React,{Component} from 'react';
import Aos from 'aos';

class Cv extends Component {
    constructor(props){
        super()
    }
    render() { 
        Aos.init()
        return ( 
            <div className="container">
                {/* <div id="cvEmbed" className="row">
                  <div id="cv"className="col-lg-12">
                   <div id="cvEmbed"> {this.props.cv}</div>
                  </div>
                  </div> */}
                  <div id="cv-btn" className="row">

                  <a  data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="400"
     data-aos-offset="0"href={this.props.href} className="btn-header text-white" target={this.props.target} > Download CV</a>

                  </div>
              </div>
         );
        }
    }
    
    export default Cv;

