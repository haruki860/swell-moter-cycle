import React from "react";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bike from "../../images/bike.jpg";
import bike2 from "../../images/bike2.jpg";
import bike3 from "../../images/bike3.jpg";
import shop from "../../images/shop.jpg";
const Home = () => {
  const settings = {
    //スライドアニメーションの設定
    fade: true, // fedeオン
    speed: 1500, // 画像切り替えにかかる時間（ミリ秒）
    autoplaySpeed: 3000, // 自動スライド切り替え速度
    arrows: false, // 矢印表示・非表示
    autoplay: true, // 自動再生
    slidesToShow: 1, // スライド表示数
    slidesToScroll: 1, // スライドする数
    infinite: true, // 無限リピート オン・オフ
  };
  const images = [bike, bike2, bike3]; //スライダーで表示する画像の配列

  return (
    <>
      <Slider {...settings}>
        {images.map((img) => {
          return (
            <div>
              <img src={img} className="sliderBike" />
            </div>
          );
        })}
      </Slider>
      <h2 className="ABOUT-US">ABOUT-US</h2>
      <div className="flex">
        <img src={shop} className="shop" />
        <div className="flexFlow">
          <p className="aboutusTitle">Swell Moter Cycle</p>
          <p className="aboutuIntroductionText">
            佐賀県鳥栖市にあるディーラー。バイクや車の販売や整備を主に行なっており、経験、知識の豊富なオーナーが経営しています。アメ車やドイツ車喉も所有しており、お好きな方はぜひ一度訪れてください。
          </p>
        </div>
      </div>
      ;
    </>
  );
};
export default Home;
