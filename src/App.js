import React, {useState}  from 'react';
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
import lang from './lang.json'

function App() {
let activeLn="eng";
let languages=lang;
let ln=languages.lang;
console.log('1st con.log ' ,languages.lang.nl)


const [language,setLanguage]=useState(languages.lang.eng);

const handleChangeLanguages=()=>{
  let selectedLAng=document.querySelector('#langSelect').value
  activeLn = ln[selectedLAng]
  setLanguage(activeLn)
  activeLanguage=activeLn
  console.log(activeLn.nav.name)
}

  console.table(languages.lang.eng)
  

  const{nav,header,about,projects,contact,salutation}=language
  const{morning,noon,afterNoon,evening,night}=salutation
  
  let time=new Date ();
  let hour=time.getHours();
  let greeting='';
 hour<12?greeting=morning:hour<15?greeting=noon:hour<18?greeting=afterNoon:hour<22?greeting=evening:greeting=night
 
  let activeLanguage=activeLn;
  console.log( 'consl in app',activeLanguage)
  return (
 
    <div className="App">
      <Navbar  changeLanguage={handleChangeLanguages}
      main={nav.main}
      about={nav.about}
      projects={nav.projects}
      contact={nav.contact}
      />
      <Header
      title={header.main}
      description={header.sub}
      btnText={header.buttonText}
      />
      <About
      salute={greeting}
      avatar={avatar}
      name={about.name}
      birth={about.birth}
      city={about.living}
      text={ <p data-aos="fade-up"
      data-aos-duration="3000" className="text-white-50">
       {/* Leren duurt levens lang.<br/> */}
       {about.aboutText}
            
            
            
       </p>}
      />
      <Projects
      titleIce={projects.icecream.title}
      textIce={<p   data-aos="fade-up"
      data-aos-duration="3000"id="projectDiscription" className="text-50 mb-0">
        {projects.icecream.text}
          </p>}
      belTitle1={projects.belgium.title1}
      textBel1={<p   data-aos="fade-up"
      data-aos-duration="3000"className="mb-0 text-white-50">
         {projects.belgium.text1}
      </p>}
      belTitle2={projects.belgium.title2}
      textBel2={<p  data-aos="fade-up"
      data-aos-duration="3000"className="mb-0 text-white-50">
         {projects.belgium.text2}
      </p>} 
      titleAir={projects.air.title}
      textAir={  <p  data-aos="fade-up"
      data-aos-duration="3000"id="projectDiscription" className="text-50 mb-0">
        {projects.air.text}
     </p>}    
      />
      <Cv
      cv={ <embed id="cvEmbed" src={Resume} />}
      href={Resume}
      cvBtn={projects.cvBtn}
      target="_blank"/>
      <Contactcontainer>
      <Contact
      typeInfo={contact.addressTag}
      infoText={<a href="http://maps.google.com/maps?q=47A+Nijverheidstraat,+8400,+Oostende">
       <b> Abdellah Fihri</b> <br/>
        Nijverheidstraat 47A <br/>
        8400 Oostende</a> }
      />
       <Contact
      typeInfo={contact.emailTag}
      infoText={<a href="mailto:someone@yoursite.com">abdellahfihri@gmail.com</a>}
      />
       <Contact
      typeInfo={contact.gsm}
      infoText={<a href="tel:+32495701222">0495 701 222</a>}
       style={{marginBottom:"5px;"}}/>
      </Contactcontainer>
    </div>
  );
}

export default App;
