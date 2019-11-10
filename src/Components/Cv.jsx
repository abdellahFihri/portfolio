/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Aos from "aos";

const Cv = ({ href, target,cvBtn }) => {
  Aos.init();
  return (
    <div className="container">
      <div id="cv-btn" className="row">
        <a
          id="cv-btn"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="400"
          data-aos-offset="0"
          href={href}
          className="btn-header text-white"
          target={target}
        >
          {" "}
          {cvBtn}
        </a>
      </div>
    </div>
  );
};

export default Cv;
