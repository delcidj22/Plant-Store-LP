import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';





function Header() {
  return (
      <div className="Header">
        <div className="title">
        <h1>SEATTLE PLANT STORE <i class="fa-solid fa-leaf fa-bounce" > </i> </h1>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Products</a>
    </div>
  </div>
</nav>
        
      </div>
  )



}


export default Header