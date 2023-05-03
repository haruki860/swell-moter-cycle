import React from "react";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bike from "../../images/bike.jpg";
import bike2 from "../../images/bike2.jpg";
import bike3 from "../../images/bike3.jpg";

const Home = () => {
  const settings = {
    fade: true, // fedeオン
    speed: 1500, // 画像切り替えにかかる時間（ミリ秒）
    autoplaySpeed: 3000, // 自動スライド切り替え速度
    arrows: false, // 矢印表示・非表示
    autoplay: true, // 自動再生
    slidesToShow: 1, // スライド表示数
    slidesToScroll: 1, // スライドする数
    infinite: true, // 無限リピート オン・オフ
  };
  const images = [bike, bike2, bike3];
  return (
    <Slider {...settings}>
      {images.map((img) => {
        return (
          <div className="bike">
            <img src={img} alt="bike" />
          </div>
        );
      })}
    </Slider>
  );
};
export default Home;
