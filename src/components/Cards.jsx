import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <h1 id='carTitle' className='text-center text-white mb-5'>Our Cars</h1>

    <Carousel activeIndex={index} onSelect={handleSelect} className='m-auto w-75 m-5 border border-3 border-white rounded'>
      <Carousel.Item>
        <img
          
          className="d-block h-100 w-100"
          src="/images/teslaModelX.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Tesla Model X</h3>
          <p className='text-center'>An all-electric SUV that offers impressive performance.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block h-100 w-100"
          src="/images/teslaModel3.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Tesla Model 3</h3>
          <p className='text-center w-auto'>More affordable electric sedan that has become one of the best-selling electric cars in the world.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/teslaModelS.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Tesla Model S</h3>
          <p className='text-center'>
          High-performance electric sedan that has set the standard for luxury electric vehicles.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default ControlledCarousel;