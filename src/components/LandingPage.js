import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import photo1 from '../img/plants1.jpg';


function LandingPage() {
  return (
    <div className="Row">
    <div className="mainPage">
      <div className="col-6">
      <img src={photo1} alt="PlantImage" width="800" height="800" />
      </div>
      <div className="col-6">
      <div id="contact-form"
      style={{marginTop:'50px',
      width:'50%'}}>
            <input type="text" placeholder="Your Name" className="form-control" />
            <input type="email" placeholder="Your email address" className="form-control"/>
            <textarea placeholder="Your message" rows="4" className="form-control"></textarea>
            <button>Submit</button>
            <span>Thank you for your message, we will be in touch soon!</span>
        </div>
      </div>
    </div>
    </div>

  );

  
}


export default LandingPage