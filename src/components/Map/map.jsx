import { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { MdPlace } from "react-icons/md";

export default function Map({ theme }) {
  const [mapTheme, setMapTheme] = useState("");
  const mapbox =
    "pk.eyJ1IjoiYmFua293IiwiYSI6ImNrcncwZWJidTBiemcybnIwMHBpbTRpcWEifQ.4lAQ7JUUpDFOtFqyYg7uCw";
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 250,
    latitude: -15.6053382,
    longitude: -56.0809534,
    zoom: 18.25,
  });
  useEffect(() => {
    if (theme.title === "light") {
      setMapTheme("mapbox://styles/bankow/ckrw0q7fb0nvo17nuk5jqbrq6");
    } else {
      setMapTheme("mapbox://styles/bankow/ckrw4l16g0krp17kp4714kgcp");
    }
  }, [theme.title]);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={mapbox}
      onViewportChange={(nextViewPort) => setViewport(nextViewPort)}
      mapStyle={mapTheme}
    >
      <Marker
        latitude={-15.605369775594587}
        longitude={-56.081050858980895}
        offsetLeft={-50}
        offsetTop={-70}
      >
        <MdPlace
          style={{ fontSize: viewport.zoom * 5, color: theme.colors.secondary }}
        />
      </Marker>
    </ReactMapGL>
  );
}
