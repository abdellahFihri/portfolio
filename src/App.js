import React from 'react';
import Navbar from './Components/Nav';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contactcontainer from './Components/Contactcontainer';
import Contact from './Components/Contact';
import Resume from './documents/AbdellahFihriCV.pdf';
import avatar from './img/myAvatar.jpg';
import Cv from './Components/Cv';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  let time=new Date ();
  let hour=time.getHours();
  let greeting='';
 hour<12?greeting='Goedemorgen':hour<17?greeting='Goedemiddag':hour<22?greeting='Goedeavond':greeting='Goedenacht'
 
  
  return (
    
    <div className="App">
      <Navbar/>
      <Header
      title="love for gradient curved design"
      description="I have passion for elegant and responsive design using beautiful gradient colors, curved element boxes, nice hover effects and soft light drop-shadows effect."
      />
      <About
      salute={greeting}
avatar={avatar}
      />
      <Projects/>
      <Cv
      cv={ <embed id="cvEmbed" src={Resume} />}
      href={Resume}
      target="_blank"/>
      <Contactcontainer>
      <Contact
      typeInfo="Adress"
      infoText={<a href="http://maps.google.com/maps?q=47/A+Nijverheidstraat,+8400,+Oostende">
        Nijverheidstraat,47/A <br/>
        8400,Oostende</a> }
      />
       <Contact
      typeInfo="email"
      infoText={<a href="mailto:someone@yoursite.com">abdellahfihri@gmail.com</a>}
      />
       <Contact
      typeInfo="phone"
      infoText={<a href="tel:+32495701222">0495 701 222</a>}
       style={{marginBottom:"5px;"}}/>
      </Contactcontainer>
    </div>
  );
}

export default App;
