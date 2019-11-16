/* eslint-disable no-fallthrough */
import React, {useState}  from 'react';
import Example from './Components/Nav';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contactcontainer from './Components/Contactcontainer';
import Contact from './Components/Contact';
import resumeEng from './documents/AbdellahFihriCVTRY.pdf';
 import resumeNl from './documents/AbdellahFihriCV.pdf';
 import resumeFr from './documents/AbdellahFihriCVFR.pdf';
import avatar from './img/myAvatar.jpg';
import Cv from './Components/Cv';

 import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import lang from './lang.json'



function App() {
  
let activeLn="eng";
let languages=lang;
let ln=languages.lang;

// console.log('1st con.log ' ,languages.lang.nl)
// console.log('what i want to see ',activeLn)


const [language,setLanguage]=useState(languages.lang.eng);

const handleChangeLanguages=()=>{
  let selectedLAng=document.querySelector('#langSelect').value
  activeLn = ln[selectedLAng]
  setLanguage(activeLn)
  activeLanguage=activeLn
  console.log(activeLn.nav.name) 
}
console.log('resume in json ')
let resume

switch(language.resume){
  case "fr":
    resume=resumeFr
     
  break;
  case "nl":
    resume=resumeNl
     break;
 case "eng":
   resume=resumeEng
     break;
  default:
    return resume

}


console.log('resume',resume)



  console.table(languages.lang.eng)

  

  const{nav,header,about,projects,contact,salutation}=language
  const{morning,noon,evening,night}=salutation
  
  let time=new Date ();
  let hour=time.getHours();
  let greeting='';
 hour<12?greeting=morning:hour<15?greeting=noon:hour<18?greeting=noon:hour<22?greeting=evening:greeting=night
 
  let activeLanguage=activeLn;
  console.log( 'consl in app',activeLanguage)
  return (
 
    <div className="App">
      <Example  changeLanguage={handleChangeLanguages}
      name={nav.name}
       cv={nav.cv}
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
      // cv={ <embed id="cvEmbed" src="../AbdellahFihriCV.pdf" />}
      href={resume}
      cvBtn={projects.cvBtn}
      target="_blank"/>
      <Contactcontainer>
      <Contact
      classname="col-md-4 mb-3 mb-md-0"
      typeInfo={contact.addressTag}
      infoText={<a href="http://maps.google.com/maps?q=47A+Nijverheidstraat,+8400,+Oostende">
       <b> Abdellah Fihri</b> <br/>
        Nijverheidstraat 47A <br/>
        8400 Oostende</a> }
      />
       <Contact
       classname="col-md-4 mb-3 mb-md-0"
      typeInfo={contact.emailTag}
      infoText={<a href="mailto:someone@yoursite.com">abdellahfihri@gmail.com</a>}
      />
       <Contact
       classname="col-md-4 mb-3 mb-md-0"
      typeInfo={contact.gsm}
      infoText={<a href="tel:+32495701222">0495 701 222</a>}
       style={{marginBottom:"5px;"}}/>
       </Contactcontainer>
       <div id="gitContainer" className="row mr-0 ml-1 mb-5">
       <Contact
       classname="col-md-6"
       typeInfo={<i data-aos="fade-right" data-aos-duration="2000" className="fa fa-github" style={{height:"1rem",
        fontSize:" 3.75em"}} aria-hidden="true"/>}
        infoText={<a href="https://github.com/abdellahFihri" rel="noopener noreferrer" target="_blank">https://github.com/abdellahFihri</a>}
        />
        <Contact
        
        classname="col-md-6 "
        typeInfo={<i data-aos="fade-left"  data-aos-duration="2000" className="fa fa-linkedin" style={{height:"1rem",
        fontSize:" 3.75em"}}/>}
        infoText={
        <a href="https://www.linkedin.com/in/abdellah-fihri-767326152/"
         rel="noopener noreferrer" target="_blank">
           https://www.linkedin.com/in/abdellah-fihri-767326152/
           </a>
           }
           />
           </div>
    </div>
  );
}

export default App;
