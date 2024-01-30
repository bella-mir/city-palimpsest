import { useCallback, useContext, useEffect, useRef, useState } from "react";
import {
  LngLatBoundsLike,
  Map,
  Marker,
  MarkerDragEvent,
  NavigationControl,
} from "react-map-gl";
import maplibregl from "maplibre-gl";
import Pin from "./pin";
import { FormContext } from "../formContext";

export const MiniMap = () => {
  const { setCoordinates, coordinates } = useContext(FormContext);

  useEffect(() => {
    setMarker({ latitude: coordinates.lat, longitude: coordinates.lng });
  }, [coordinates]);

  const [marker, setMarker] = useState({
    latitude: coordinates.lat,
    longitude: coordinates.lng,
  });

  const onMarkerDragStart = useCallback((event: MarkerDragEvent) => {
    console.log(event);
  }, []);

  const onMarkerDrag = useCallback((event: MarkerDragEvent) => {
    setMarker({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
    });
  }, []);

  const onMarkerDragEnd = useCallback((event: MarkerDragEvent) => {
    setCoordinates({ lng: event.lngLat.lng, lat: event.lngLat.lat });
  }, []);

  const mapRef = useRef(null);

  const maxBounds = [
    { lng: 11.25, lat: 48 },
    { lng: 12, lat: 48.3 },
  ];

  // const layerFillStyle: LayerProps = {
  //   id: "dff",
  //   type: "fill",
  //   paint: {
  //     "fill-color": "rgba(255,255,255,0.6)",
  //     "fill-outline-color": "#8585AD",
  //   },
  // };

  return (
    <>
      <Map
        attributionControl={false}
        // @ts-ignore
        mapLib={maplibregl}
        initialViewState={{
          latitude: 48.14,
          longitude: 11.575,
          zoom: 14,
        }}
        mapStyle={
          "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        }
        ref={mapRef}
        maxZoom={15}
        minZoom={9}
        maxBounds={maxBounds as LngLatBoundsLike}
        style={{ height: "100%", minHeight: "300px" }}
      >
        <NavigationControl position="bottom-left" showCompass={false} />
        {/* <Source id="base" type="geojson" data={border as FeatureCollection}>
          <Layer {...layerFillStyle} />
        </Source> */}
        <Marker
          longitude={marker.longitude}
          latitude={marker.latitude}
          draggable
          onDragStart={onMarkerDragStart}
          onDrag={onMarkerDrag}
          onDragEnd={onMarkerDragEnd}
          anchor="bottom"
        >
          <Pin size={20} />
        </Marker>
      </Map>
    </>
  );
};
