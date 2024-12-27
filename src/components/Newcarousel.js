import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';



export default function Newcarousel() {
  return (
    <Carousel interval={2000} fade>
      {/* Carousel Item 1 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://irc.itum.mrt.ac.lk/slider.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>IITUM IRC 2024</h3>
         
        </Carousel.Caption>
      </Carousel.Item>

      {/* Carousel Item 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://itum.mrt.ac.lk/sites/default/files/2024-12/IRC-2024-1-0614.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>IITUM IRC 2024</h3>
          
        </Carousel.Caption>
      </Carousel.Item>

      {/* Carousel Item 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://itum.mrt.ac.lk/sites/default/files/2024-12/IRC-2024-1-0841.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>IITUM IRC 2024</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 
  )
}
