import { useRef } from "react";
import Map, { MapRef } from "react-map-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import maplibre from "maplibre-gl";

export const MapContainer = () => {
  const mapRef = useRef<MapRef>(null);
  return (
    <>
      <Map
        // @ts-ignore
        mapLib={maplibre}
        initialViewState={{
          latitude: 40,
          longitude: -100,
          zoom: 3,
        }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        style={{ width: "100vw", height: "100vh" }}
        ref={mapRef}
      ></Map>
    </>
  );
};
