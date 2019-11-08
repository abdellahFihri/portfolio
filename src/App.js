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
 hour<12?greeting='Goedemorgen':hour<15?greeting='Goedemiddag':hour<18?greeting='Goedenamiddag':hour<22?greeting='Goedeavond':greeting='Goedenacht'
 
  
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
      name=" Name: Abdellah Fihri"
      birth="Birth: 22/11/1984"
      city="Living in: Ostende"
      text={ <p data-aos="fade-up"
      data-aos-duration="3000" className="text-white-50">
       Leren duurt levens lang.<br/>
       IT is steeds mijn grootste interesse geweest. Van jongs af aan hield ik me bezig met het repareren van computers,
        verdiepte ik me in de wereld van internet of things en startte ik met het programmeren van kleine webapplicaties.
         Wannneer ik meer en meer in aanraking kwam met programmeren,
          besefte ik me vooral hier verder in te willen ontwikkelen.
           Vandaar dat ik ervoor koos de opleiding front-end developer te volgen bij INTEC BRUSSEL.
            Momenteel versterk ik mijn kennis van Javascript, stap voor stap wil ik me meer talen eigen maken. 
       </p>}
      />
      <Projects
      textIce={<p   data-aos="fade-up"
      data-aos-duration="3000"id="projectDiscription" className="text-50 mb-0">
          This ice cream selector exercise was good to test our sense of logic and conditionals.<br/>
           we had to set a limit of 1 ball minimum and 3 balls maximum per vessel,but i've taken this exercise
           a step further by adding a second vessel option and setting its maximum to 4 balls instead of 3. Now depending
           on which vessel is chosen at the beginning of the selection the maximum reach will vary.
           after the selection validation an alert appears to give us a 
           summary of our selection,or a warning message in case invalid selections.</p>}
      belTitle1="Belgium flag"
      textBel1={<p   data-aos="fade-up"
      data-aos-duration="3000"className="mb-0 text-white-50">
          This exercise was about responsivity, we see in here that the flag expands to take about 60% of the view 
          with belgian fries in the middle of it.
      </p>}
      belTitle2="Belgium flag resized"
      textBel2={<p  data-aos="fade-up"
      data-aos-duration="3000"className="mb-0 text-white-50">
          after making the browser window smaller, at some range the belgian flag will shrink to the middle of the page, the
           red color will go below, and the fries will turn into mannekepiss.
         
      </p>} 
      textAir={  <p  data-aos="fade-up"
      data-aos-duration="3000"id="projectDiscription" className="text-50 mb-0">
         This exercise was quite challenging,working with dates to determine the prices on tickets was interessting. Setting
          the start price as 1000€, The price decreases by 1% each day ahead of the actual day. By each purchased ticket the initial 
          price must decrease by 10%, And yet the last 2 passengers will have to pay double of the initial price after the discounts. <br/>
          Yet if the chosen travel date is the actual date, the price will be 1000€ without any discounts nor discounts after a ticket purchase. <br/>
          And if the initial price after daily discount of 1 % will go bellow the 100€, then there will be a limit of 100€ as minimum per ticket. Knowing that the available tickets are 10  and the passengers must not exeed this limit.

     </p>}    
      />
      <Cv
      cv={ <embed id="cvEmbed" src={Resume} />}
      href={Resume}
      target="_blank"/>
      <Contactcontainer>
      <Contact
      typeInfo="Address"
      infoText={<a href="http://maps.google.com/maps?q=47A+Nijverheidstraat,+8400,+Oostende">
       <b> Abdellah Fihri</b> <br/>
        Nijverheidstraat,47A <br/>
        8400,Oostende</a> }
      />
       <Contact
      typeInfo="E-mail"
      infoText={<a href="mailto:someone@yoursite.com">abdellahfihri@gmail.com</a>}
      />
       <Contact
      typeInfo="Phone"
      infoText={<a href="tel:+32495701222">0495 701 222</a>}
       style={{marginBottom:"5px;"}}/>
      </Contactcontainer>
    </div>
  );
}

export default App;
