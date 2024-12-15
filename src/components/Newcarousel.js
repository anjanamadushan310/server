import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';



export default function Newcarousel() {
  return (
    <Carousel interval={3000} fade>
      {/* Carousel Item 1 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400/0000FF/808080?text=Image+1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Image</h3>
          <p>This is the first image in the carousel.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Carousel Item 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400/FF5733/808080?text=Image+2"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Image</h3>
          <p>This is the second image in the carousel.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Carousel Item 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400/4CAF50/808080?text=Image+3"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Image</h3>
          <p>This is the third image in the carousel.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 
  )
}
