import { Carousel } from 'bootstrap';
import React from 'react';
import image1 from "../img/image1.jpg";

function Images() {
  return (
      <Carousel.Item>
          <div className="d-block w-100">
          <img src={image1} alt="Carousel1" width="600" height="600" />
          </div>
      </Carousel.Item>
    
  );
}

export default Images;