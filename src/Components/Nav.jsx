import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import favicon from '../img/favicon.png'



class Nav extends Component {
    state = {
              currentScrollHeight:'',
              style: ''  
             }
    componentDidMount () { 
      
      window.onscroll =()=>{
       const newScrollHeight = Math.ceil(window.scrollY / 0.2) *0.2;
       if (this.state.currentScrollHeight <= newScrollHeight){
           this.setState({currentScrollHeight: newScrollHeight,style:'none'})
       } 
        if( this.state.currentScrollHeight>newScrollHeight){
       this.setState({currentScrollHeight: newScrollHeight});
       this.state.currentScrollHeight===newScrollHeight? this.setState({style:''}):this.setState({style:'none'});
       }
     }
   }
   
    render() {
    const {changeLanguage,about,projects,contact}=this.props;
    
     const property=this.state.style;
        return ( 
            <Navbar  style={{display:property}} className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            {/* <a href="#Header"> <img id="icon"  src={favicon} alt="icon"/></a> */}
            <div className="container">
              <a id="myname"  className="navbar-brand js-scroll-trigger" href="Header">Abdellah Fihri</a>
            
              <div className=" navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">

                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#about">{about}</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#projects">{projects}</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#cv-btn">CV</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#Contacts">{contact}</a>
                  </li>
                </ul>
              </div>
              <select id="langSelect" onChange={()=>changeLanguage()}>
  <option value="eng">ENG</option>
  <option value="nl">NL</option>
  <option value="fr">FR </option>
</select>
            </div>
          </Navbar>
         );
    }
}
 
export default Nav;
