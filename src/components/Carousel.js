import React from 'react';
import image1 from "../img/mainpage.jpg";
import image2 from "../img/store1.jpg";
import image3 from "../img/store2.jpg";
import Carousel from 'react-bootstrap/Carousel';


function PhotoCarousel() {
  return (
    <Carousel variant="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={image1} alt="PlantImage" width="600" height="800"
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={image2} alt="PlantImage2" width="600" height="800"
      />
      <Carousel.Caption>
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={image3} alt="PlantImage2" width="600" height="800"
      />
      <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
}

export default PhotoCarousel;