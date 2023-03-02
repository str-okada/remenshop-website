import Carousel from 'react-bootstrap/Carousel';
import ramenImg4 from "../Images/carousel/4.jpg";
import ramenImg6 from "../Images/carousel/6.jpg";
import ramenImg8 from "../Images/carousel/8.jpg";

function RamenCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ramenImg4}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ramenImg6}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ramenImg8}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default RamenCarousel;