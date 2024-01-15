import { useCallback, useRef, useState } from "react";
import Map, {
  MapRef,
  Source,
  Layer,
  // GeoJSONSource,
  LngLat,
  Popup,
} from "react-map-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import maplibre from "maplibre-gl";
import { FeatureCollection } from "geojson";
import data from "./data/buildings.json";
import { layerFillStyle } from "./map-constants";

export const MapContainer = () => {
  const mapRef = useRef<MapRef>(null);
  // const API_KEY: string = "GU4MPQ5iNxp41sph03wQ";

  const [popupInfo, setPopupInfo] = useState<any>(null);
  const [cursor, setCursor] = useState<string>("auto");
  const [infoCoords, setInfoCoords] = useState<LngLat | undefined>(undefined);

  const onMouseEnter = useCallback(() => setCursor("pointer"), []);
  const onMouseLeave = useCallback(() => setCursor("auto"), []);

  const onClick = useCallback(
    (event: any) => {
      const feature = event.features[0];

      setPopupInfo(feature);
      setInfoCoords(event.lngLat);
    },
    [popupInfo]
  );

  return (
    <>
      <Map
        // @ts-ignore
        mapLib={maplibre}
        initialViewState={{
          latitude: 48.1,
          longitude: 11.5,
          zoom: 10,
        }}
        // mapStyle={`https://api.maptiler.com/maps/1e6f009f-c894-4317-a466-fe522089bc87/style.json?key=${API_KEY}`}
        mapStyle={
          "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        }
        interactiveLayerIds={["dff"]}
        style={{ width: "100vw", height: "100vh" }}
        ref={mapRef}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        cursor={cursor}
      >
        <Source id="base" type="geojson" data={data as FeatureCollection}>
          <Layer {...layerFillStyle} />
        </Source>
        {popupInfo && infoCoords && (
          <Popup
            longitude={infoCoords.lng}
            latitude={infoCoords.lat}
            onClose={() => setPopupInfo(null)}
            maxWidth={"300px"}
          ></Popup>
        )}
      </Map>
    </>
  );
};
