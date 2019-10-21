import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';


class Nav extends Component {
    state = {  }
    render() { 
        return ( 
            <Navbar className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
              <a id="myname"  className="navbar-brand js-scroll-trigger" href="Header">Abdellah Fihri</a>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
              </button>
              <div className=" navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#Header">Main</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#projects">Projects</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#cv-btn">C.V</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#Contcats">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </Navbar>
         );
    }
}
 
export default Nav;
