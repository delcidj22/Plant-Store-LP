import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="text-center text-white">
    <div className="container pt-4">
    <section className="mb-4">

      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-facebook-f"></i
      ></a>

      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-twitter"></i>
        </a>

      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-google"></i
      ></a>

      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-instagram"></i
      ></a>
    </section>
  </div>

  <div className="text-center text-dark p-3">
    © 2022 Copyright: 
    <a className="text-dark" href="https://mdbootstrap.com/">Seattle Plant Store</a>
  </div>
  
</footer>

  )
  }

export default Footer