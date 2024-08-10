import { FC } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  height: "100%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const MapGoogle: FC = () => {
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

      </div>
    </div>
  );
};

export default MapGoogle;
