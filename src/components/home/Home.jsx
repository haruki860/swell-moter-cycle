import React from "react";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bike from "../../images/bike.jpg";
import bike2 from "../../images/bike2.jpg";
import bike3 from "../../images/bike3.jpg";

const Home = () => {
  Slider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const images = [{ bike }, { bike2 }, { bike3 }];
    return (
      <Slider {...settings}>
        {(images.map = (img) => <div>{<img src={img} alt="bike" />}</div>)}
      </Slider>
    );
  };
};
export default Home;
