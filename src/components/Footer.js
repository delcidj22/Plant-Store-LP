import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer class="text-center text-white">
    <div class="container pt-4">
    <section class="mb-4">
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i
      ></a>

      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i>
        </a>

      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>

      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-instagram"></i
      ></a>
    </section>
  </div>

  <div class="text-center text-dark p-3">
    © 2022 Copyright: 
    <a class="text-dark" href="https://mdbootstrap.com/">Seattle Plant Store</a>
  </div>
</footer>

  )
  }

export default Footer