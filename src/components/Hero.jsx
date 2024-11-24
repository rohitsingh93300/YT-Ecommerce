import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from '../assets/Slider1.png'
import Slider2 from '../assets/Slider2.png'

const Hero = () => {
    var settings = {
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className='mx-auto '>
      <Slider {...settings}>
      <div>
        <img src={Slider1} alt="" />
      </div>
      <div>
      <img src={Slider2} alt="" />
      </div>
    </Slider>
    </div>
  )
}

export default Hero
