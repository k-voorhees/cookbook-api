import React, { useEffect, useState } from "react";
import Slider from "react-slick";

function MyCarousel() {
  const [carousel, setCarousel] = useState([]);

  const numberOfImages = 5;
  useEffect(() => {
    fetch(`/api/carousel?amount=${numberOfImages}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setCarousel(data.carousel));
  }, []);
  var settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {carousel.map((image, i) => (
        <div key={i}>
          <img src={image} alt={image} />
        </div>
      ))}
    </Slider>
  );
}

export default MyCarousel;
