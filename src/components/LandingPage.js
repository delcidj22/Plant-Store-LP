import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import photo1 from '../img/plants1.jpg';


function LandingPage() {
  return (
    <div className="Row">
    <div className="mainPage">
      <div className="col-6">
      <img src={photo1} alt="PlantImage" width="600" height="600" />
      </div>
      <div className="col-6">
        <div className="message1">
          <h2>Let us know your questions</h2>
        </div>
        <div className="message2">
          <p>Each one of you team members are plant experts here. Drop us a quesiton below and let us help you take care of your plants!</p>
        </div>  
      <div id="contact-form"
      style={{marginTop:'50px',
      width:'50%'}}>
            <input type="text" placeholder="Your Name" className="form-control" />
            <input type="email" placeholder="Your Email Address" className="form-control"/>
            <textarea placeholder="Your Question" rows="4" className="form-control"></textarea>
            <button type="button" class="btn btn-outline-dark">Submit</button>
            <span>We will be in touch soon!</span>
        </div>
      </div>
    </div>
    </div>

  );

  
}


export default LandingPage