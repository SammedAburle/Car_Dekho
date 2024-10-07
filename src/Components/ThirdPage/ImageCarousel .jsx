import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; 

import Creta from '../../assets/Images/PopularCars/Creta.webp';
import Fronx from '../../assets/Images/PopularCars/Fronx.webp';
import Scorpio from '../../assets/Images/PopularCars/Scorpio.webp';
import Xuv700 from '../../assets/Images/PopularCars/Xuv700.webp';

const ImageCarousel = () => {
  
  const settings = {
    dots: true,  
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,  
    centerPadding: '0',  
    focusOnSelect: true,
    gap: 5,
  
    responsive: [
      {
        breakpoint: 1024, // Tablet and large screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // Small screens and mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false, // Disable centering for mobile
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title" style={{ fontFamily: "revert" }}>Popular Cars</h2>
      <Slider {...settings}>
        <div className="image-slide">
          <img src={Creta} alt="Car 1" id="Cars1" style={{ height: 400, width: 400, marginLeft: 10}} />
        </div>
        <div className="image-slide">
          <img src={Fronx} alt="Car 2" id="Cars1" style={{ height: 400, width: 400, marginLeft: 10}} />
        </div>
        <div className="image-slide">
          <img src={Scorpio} alt="Car 3" id="Cars1" style={{ height: 400, width: 400, marginLeft: 10 }} />
        </div>
        <div className="image-slide">
          <img src={Xuv700} alt="Car 4" id="Cars1" style={{ height: 400, width: 400, marginLeft: 10}} />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
