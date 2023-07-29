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
      <div className="shop">店舗 / 営業時間</div>
      <div className="mailAddess">
      <div className="mail">841-0044</div>
      <div className="address">佐賀県鳥栖市高田町73-4</div>
      </div>

      <div className="wrap">
        <LoadScript googleMapsApiKey="AIzaSyBWEtUZy2xQ0-ve6dqFEHtBp7ix-xWy0Cg">
          <GoogleMap
            mapContainerStyle={container}
            center={position}
            zoom={18.5}
          >
            <MarkerF
              position={position}
              icon={"https://maps.google.com/mapfiles/kml/paddle/red-blank.png"}
            />
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
};

export default Access;
