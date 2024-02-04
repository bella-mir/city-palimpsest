import { useCallback, useContext, useEffect, useRef, useState } from "react";
import {
  Layer,
  LayerProps,
  LngLatBoundsLike,
  Map,
  Marker,
  MarkerDragEvent,
  NavigationControl,
  Source,
} from "react-map-gl";
import { FeatureCollection } from "geojson";
import maplibregl from "maplibre-gl";
import Pin from "./pin";
import { FormContext } from "../formContext";
import admin from "../../../../../../../data/munich_admin.json";

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

  const adminFillStyle: LayerProps = {
    id: "admin",
    type: "fill",
    paint: {
      "fill-color": "rgba(255,255,255,0.6)",
      "fill-outline-color": "#8585AD",
    },
  };

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
        <Source id="admin" type="geojson" data={admin as FeatureCollection}>
          <Layer {...adminFillStyle} />
        </Source>
        <NavigationControl position="bottom-left" showCompass={false} />
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
