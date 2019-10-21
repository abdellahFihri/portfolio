import React from 'react';

const Contactcontainer=(props)=> {
     
        return (
            <section id="Contcats" className="contact-section ">
            <div className="container">       
              <div id="contactCards" className="row">
                      {props.children}
             </div>
            </div>
          </section>       
          );
    }

export default Contactcontainer;