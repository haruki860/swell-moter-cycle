import React from "react";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaInstagram } from "react-icons/fa";
import bike from "../../assets/bike.jpg";
import bike2 from "../../assets/bike2.jpg";
import bike3 from "../../assets/bike3.jpg";
import shop from "../../assets/shop.jpg";

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
  const onClickIcon = () => {
    window.open("https://www.instagram.com/arima.lowlider/", "_blanck");
  };
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=yes"
      ></meta>
      <Slider {...settings}>
        {images.map((img) => {
          return (
            <div>
              <img src={img} className="sliderBike" />
            </div>
          );
        })}
      </Slider>
      <div className="flex">
        <img src={shop} className="imageShop" />
        <div className="flexFlow">
          <div className="aboutusTitle">Swell Moter Cycle</div>
          <div className="aboutuIntroductionText">
            佐賀県鳥栖市にあるディーラー。バイクや車の販売や整備を主に行なっており、経験、知識の豊富なオーナーが経営しています。アメ車やドイツ車喉も所有しており、お好きな方はぜひ一度訪れてください。
          </div>
        </div>
      </div>
      <div className="contactPosition">
        <div className="contact">CONTACT</div>
        <div className="tel">TEL : 0942-50-9835</div>
        <div className="fax">FAX : 50-9836</div>
        <button onClick={onClickIcon} className="instagram">
          <FaInstagram size={30} color={"#ff93ff"} />
        </button>
      </div>
    </>
  );
};
export default Home;
