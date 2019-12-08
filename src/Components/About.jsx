import React from "react";
import Aos from "aos";
const About=({ salute, avatar, name, birth, city, text })=>{
    Aos.init();
    return (
      <section id="about" className="about-section text-center">
        <div className="container">
          <div className="row">
            <div id="avatar" className="col-md-4">
              <img
                data-aos="fade-right"
                data-aos-duration="3000"
                src={avatar}
                alt="avatar"
              />
              {name} <br />
              {birth} <br />
              {city} <br />
            </div>
            <div className="col-lg 8">
              <h2
                id="salute"
                data-aos="zoom-in"
                data-aos-duration="3000"
                className="text-white mb-4"
              >
                {" "}
                {salute}
              </h2>
              <hr
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
                id="hr"
              />
              {text}
            </div>
          </div>
        </div>
      </section>
    );
  }


export default About;
