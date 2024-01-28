import { useCallback, useMemo, useRef, useState } from "react";
import Map, {
  MapRef,
  Source,
  Layer,
  LngLat,
  Popup,
  ScaleControl,
  LngLatBoundsLike,
} from "react-map-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import maplibre from "maplibre-gl";
import { FeatureCollection } from "geojson";
import { LAYERS, clusterCountLayer, clusterLayer } from "./map-constants";
import { Infowindow, Legend } from "./components";
import { useAppDispatch } from "../../app/app-types";
import { setSelectedFeature, setShowInfo } from "../../app/app-actions";
import { useSelector } from "react-redux";
import { getSelectedFeature, getSelectedLayer } from "../../app/app-selectors";

export const MapContainer = () => {
  const mapRef = useRef<MapRef>(null);
  const dispatch = useAppDispatch();
  const selectedLayer = useSelector(getSelectedLayer);
  const selectedFeature = useSelector(getSelectedFeature);

  const visibleLayer = useMemo(() => LAYERS[selectedLayer], [selectedLayer]);
  const [cursor, setCursor] = useState<string>("auto");
  const [infoCoords, setInfoCoords] = useState<LngLat | undefined>(undefined);

  const onMouseEnter = useCallback(() => setCursor("pointer"), []);
  const onMouseLeave = useCallback(() => setCursor("auto"), []);

  const maxBounds = [
    { lng: 11.25, lat: 48 },
    { lng: 12, lat: 48.3 },
  ];

  const onClick = useCallback((event: any) => {
    const feature = event.features[0];
    if (!feature) {
      return;
    }
    console.log(feature.properties);
    dispatch(setSelectedFeature(feature.properties));
    setInfoCoords(event.lngLat);
  }, []);

  const onClose = useCallback(() => {
    dispatch(setSelectedFeature(undefined));
    dispatch(setShowInfo(false));
  }, []);

  return (
    <>
      <Map
        // @ts-ignore
        mapLib={maplibre}
        initialViewState={{
          latitude: 48.14,
          longitude: 11.575,
          zoom: 14,
        }}
        mapStyle={
          "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        }
        interactiveLayerIds={["buildings", "spots", "parks"]}
        style={{ width: "100vw", height: "100vh" }}
        ref={mapRef}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        cursor={cursor}
        maxZoom={17}
        minZoom={11}
        maxBounds={maxBounds as LngLatBoundsLike}
      >
        {selectedLayer === "buildings" && (
          <Source
            id={"main1"}
            type="geojson"
            data={visibleLayer.data as FeatureCollection}
          >
            <Layer {...visibleLayer.style} />
          </Source>
        )}

        {selectedLayer === "parks" && (
          <Source
            id={"main2"}
            type="geojson"
            data={visibleLayer.data as FeatureCollection}
          >
            <Layer {...visibleLayer.style} />
          </Source>
        )}

        {selectedLayer === "spots" && (
          <Source
            id="spots"
            type="geojson"
            data={visibleLayer.data as FeatureCollection}
            cluster={true}
            clusterMaxZoom={10}
            clusterRadius={50}
          >
            <Layer {...clusterLayer} />
            <Layer {...clusterCountLayer} />
            <Layer {...visibleLayer.style} />
          </Source>
        )}

        <Legend />
        <ScaleControl position="bottom-right" />
        {selectedFeature && infoCoords && (
          <Popup
            longitude={infoCoords.lng}
            latitude={infoCoords.lat}
            onClose={() => onClose()}
            maxWidth={"300px"}
          >
            <Infowindow popupInfo={selectedFeature} />
          </Popup>
        )}
      </Map>
    </>
  );
};
