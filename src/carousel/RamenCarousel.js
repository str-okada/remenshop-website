import Carousel from 'react-bootstrap/Carousel';
import ramenImg4 from "../Images/carousel/4.jpg";
import ramenImg6 from "../Images/carousel/6.jpg";
import ramenImg8 from "../Images/carousel/8.jpg";
import './RamenCarousel.css'

function RamenCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 object-fit-cover"
          src={ramenImg4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Tonkotsu ramen</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 object-fit-cover"
          src={ramenImg6}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>Tantan men</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 object-fit-cover"
          src={ramenImg8}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>G Mega</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default RamenCarousel;