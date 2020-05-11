import React from 'react';


const DoubleContainer=({children,title1,text1,title2,text2,pic1,pic2,href})=>{
    return(
    <div className="container">
    <div className="row  justify-content-center no-gutters mb-5 mb-lg-0">
    <div className="bg-black  align-items-center col-lg-6">
      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img className="img-fluid" src={pic1} alt="img" />
      </a>
    </div>
    <div className="col-lg-6">
      <div className="bg-black text-center h-100 project">
        <div className="d-flex h-100">
          <div className="project-text w-100 my-auto text-center text-lg-left">
            <h4
              data-aos="zoom-in"
              data-aos-duration="3000"
              className="text-white"
            >
              {title1}
            </h4>
            {text1}
            <hr
              data-aos="fade-right"
              data-aos-duration="3000"
              className="d-none d-lg-block mb-0 ml-0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="row bg-black justify-content-center no-gutters mb-5">
      {
          pic2 ?
        <div className="col-lg-6">
          <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img className="img-fluid" src={pic2} alt="img" />
        
      </a>
    </div>
          :children
      }
      
    <div className="col-lg-6 order-lg-first">
      <div className="bg-black text-center h-100 project">
        <div className="d-flex h-100">
          <div className="project-text w-100 my-auto text-center text-lg-right">
            <h4
              data-aos="zoom-in"
              data-aos-duration="3000"
              className="text-white"
            >
              {title2}
            </h4>
            {text2}
            <hr
              data-aos="fade-left"
              data-aos-duration="3000"
              className="d-none d-lg-block mb-0 mr-0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
    )
    }

export default DoubleContainer