import React from "react";
import "./Access.css";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const Access = () => {
  const container = {
    width: "50%",
    height: "500px",
  };

  const position = {
    lat: 33.3443624803801,
    lng: 130.52410710790912,
  };
  return (
    <>
      <h2 className="shop">店舗住所&emsp;/&emsp;営業時間</h2>
      <div className="information">
        <div className="mailAddress">
          <div className="mail">841-0041</div>
          <div className="address">佐賀県鳥栖市高田町73-4</div>
        </div>
        <div className="businessHours">
          <div className="weekday">月〜金&emsp;10:00〜20:00</div>
          <div className="holiday">土、日&emsp;10:00〜20:00</div>
        </div>
      </div>
      <div className="wrap">
        <LoadScript googleMapsApiKey="AIzaSyBWEtUZy2xQ0-ve6dqFEHtBp7ix-xWy0Cg">
          <GoogleMap
            mapContainerStyle={container}
            center={position}
            zoom={19}
          ></GoogleMap>
        </LoadScript>
      </div>
    </>
  );
};

export default Access;
