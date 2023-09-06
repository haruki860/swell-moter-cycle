import React from "react";
import "./Access.css";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Access = () => {
  const container = {
    width: "60vw",
    height: "60vh",
  };

  const position = {
    lat: 33.3443624803801,
    lng: 130.52410710790912,
  };

  const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;
  return (
    <>
      <div className="information">
        <div className="shopTitle">
          <div className="shopAddress">店舗住所</div>
          <div className="shopHours">営業時間</div>
        </div>
        <div className="shopInfo">
          <div className="mailAddress">
            <div className="mail">841-0041</div>
            <div className="address">佐賀県鳥栖市高田町73-4</div>
          </div>
          <div className="businessHours">
            <div className="weekday">月〜金:10:00〜20:00</div>
            <div className="holiday">土、日:10:00〜20:00</div>
          </div>
        </div>
      </div>
      <div className="wrap">
        <LoadScript googleMapsApiKey={MAP_API_KEY ?? ""}>
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
