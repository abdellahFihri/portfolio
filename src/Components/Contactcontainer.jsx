import React from "react";

const Contactcontainer = ({ children }) => {
  return (
    <section id="Contacts" className="contact-section ">
      <div className="container">
        <div id="contactCards" className="row">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Contactcontainer;
