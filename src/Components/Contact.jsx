import React from 'react';


const Contact=(props)=>{
                
           return(    
                  <div  className="col-md-4 mb-3 mb-md-0">
                      <div  className="card py-4 h-100">
                          <div  className="card-body text-center">
                             <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                             <h4 className="text-uppercase m-0">{props.typeInfo}</h4>
                             <hr data-aos="flip-left"
                              data-aos-easing="ease-out-cubic"
                              data-aos-duration="3000" className="my-4"/>
                             <div className="small text-black-50">{props.infoText}</div>
                          </div>
                        </div>
                    </div>
           )              

}
 export default Contact;