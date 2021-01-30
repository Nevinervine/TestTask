import React, { Component } from "react";
import Slider from "react-slick";
import '../style/slider.css';

class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
       
        <Slider {...settings}>
        <div className='slider__item'><h3 className='slider__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at sodales quam, nec posuere urna.</h3></div>
        <div className='slider__item'><h3  className='slider__text'>tiam ut tortor volutpat, hendrerit arcu in, tristique risus. Suspendisse sit amet dignissim tellus. Nulla orci nisi</h3></div>
        <div className='slider__item'><h3  className='slider__text'>Ut sollicitudin rutrum purus sit amet cursus. Duis ante diam, dignissim eget turpis vitae, euismod posuere ligula. Curabitur in pretium metus.</h3> </div>
        <div className='slider__item'><h3  className='slider__text'>Morbi dignissim neque sit amet urna luctus, et porttitor nisi maximus.</h3></div>
    
      </Slider>
      </div>
    );
  }
}

export default SimpleSlider;
