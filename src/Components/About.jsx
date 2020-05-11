import React from "react";
import Aos from "aos";
import styles from './about.module.scss'
const About=({ salute, avatar, name, birth, city, text })=>{
    Aos.init();
    return (
      <section id="about" className="about-section text-center">
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.avatarcontainer}>
              <img
                data-aos="fade-right"
                data-aos-duration="3000"
                src={avatar}
                alt="avatar"
              />
              <div>
              {name} <br />
              {birth} <br />
              {city} <br />
              </div>
            </div>
            <div className={styles.text} >
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
