import { ImagePath, View } from "../../../../utils/constant";
import { FC } from "react";
import { Href } from "../../../../utils/constant/index";
import CustomImage from "@/Common/CustomImage";
import { Media } from "reactstrap";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  height: "350px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const MapImage: FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q&v=3.exp&libraries=geometry,drawing,places",
  });
  return (
    <div className="img-wrapper">
      <div className="map-wrapper">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          />
        ) : (
          "Loading"
        )}
        <div className="map-details">
          <Media>
            <a href={Href} className="map-img bg-size blur-up lazyloaded">
              <CustomImage
                src={`${ImagePath}/paris.jpg`}
                className="img-fluid blur-up lazyload bg-img"
                alt="paris"
              />
            </a>
            <Media body>
              <h5>paris, france</h5>
              <h6>city . france</h6>
              <span>Solez Cloter and 54 other have been here......</span>
            </Media>
          </Media>

          <a href="https://www.google.com/maps" className="btn btn-theme-light">
            {View}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MapImage;
