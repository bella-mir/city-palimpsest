import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Map, {
  MapRef,
  Source,
  Layer,
  LngLat,
  Popup,
  ScaleControl,
  LngLatBoundsLike,
  GeoJSONSource,
} from "react-map-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import maplibre from "maplibre-gl";
import { FeatureCollection } from "geojson";
import {
  LAYERS,
  adminFillStyle,
  clusterCountLayer,
  clusterLayer,
  // parksOutline,
} from "./map-constants";
import { Infowindow, Legend } from "./components";
import { useAppDispatch } from "../../app/app-types";
import { setSelectedFeature, setShowInfo } from "../../app/app-actions";
import { useSelector } from "react-redux";
import {
  getFilter,
  getSelectedFeature,
  getSelectedLayer,
} from "../../app/app-selectors";
import admin from "../../data/munich_admin.json";
import styles from "./map.module.scss";

export const MapContainer = () => {
  const mapRef = useRef<MapRef>(null);
  const dispatch = useAppDispatch();
  const selectedLayer = useSelector(getSelectedLayer);
  const selectedFeature = useSelector(getSelectedFeature);
  const filterSet = useSelector(getFilter);

  const visibleLayer = useMemo(() => LAYERS[selectedLayer], [selectedLayer]);
  const [cursor, setCursor] = useState<string>("auto");
  const [infoCoords, setInfoCoords] = useState<LngLat | undefined>(undefined);
  const [hoverInfo, setHoverInfo] = useState<any>(null);
  const [filter, setfilter] = useState<any>([">", "Period", 0]);

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

    const clusterId = feature.properties.cluster_id;

    if (clusterId) {
      const mapboxSource = mapRef?.current?.getSource("spots") as GeoJSONSource;
      mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
        if (err) {
          return;
        }

        mapRef?.current?.easeTo({
          center: feature.geometry.coordinates,
          zoom,
          duration: 500,
        });
      });
    }

    dispatch(setSelectedFeature(feature.properties));
    setInfoCoords(event.lngLat);
  }, []);

  const onHover = useCallback((event: any) => {
    const { features, lngLat } = event;
    const hoveredFeature = features && features[0];
    setHoverInfo(hoveredFeature && { feature: hoveredFeature, ...lngLat });
  }, []);

  const onClose = useCallback(() => {
    dispatch(setSelectedFeature(undefined));
    dispatch(setShowInfo(false));
  }, []);

  useEffect(() => {
    if (filterSet === "all") {
      setfilter(undefined);
    } else {
      const filterQuery = ["==", "Period", filterSet];
      setfilter(filterQuery);
    }
  }, [filterSet]);

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
        interactiveLayerIds={["buildings", "spots2", "parks"]}
        style={{ width: "100vw", height: "100vh" }}
        ref={mapRef}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        cursor={cursor}
        maxZoom={17}
        minZoom={11}
        maxBounds={maxBounds as LngLatBoundsLike}
        onMouseMove={onHover}
      >
        {selectedLayer === "buildings" && (
          <Source
            id={"main1"}
            type="geojson"
            data={visibleLayer.data as FeatureCollection}
          >
            <Layer
              {...visibleLayer.style}
              filter={filter ? filter : [">", "Period", 0]}
            />
          </Source>
        )}

        {selectedLayer === "parks" && (
          <>
            <Source
              id={"main2"}
              type="geojson"
              data={visibleLayer.data as FeatureCollection}
            >
              <Layer
                {...visibleLayer.style}
                filter={filter ? filter : [">", "Period", 0]}
              />
              {/* <Layer
                {...parksOutline}
                filter={filter ? filter : [">", "Period", 0]}
              /> */}
            </Source>
          </>
        )}

        {selectedLayer === "spots" && (
          <Source
            id="spots"
            type="geojson"
            data={visibleLayer.data as FeatureCollection}
          >
            <Layer
              {...visibleLayer.style}
              filter={filter ? filter : [">", "Period", 0]}
            />
            <Layer {...clusterLayer} />
            <Layer {...clusterCountLayer} />
          </Source>
        )}
        <Source id="admin" type="geojson" data={admin as FeatureCollection}>
          <Layer {...adminFillStyle} />
        </Source>

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
        {hoverInfo && hoverInfo.lng && hoverInfo.lat && !selectedFeature && (
          <Popup
            longitude={hoverInfo.lng}
            latitude={hoverInfo.lat}
            maxWidth="300px"
            closeButton={false}
            anchor="left"
          >
            <div className={styles.hoverInfo}>
              {hoverInfo.feature.properties["Current Name (DE)"]}
            </div>
          </Popup>
        )}
      </Map>
    </>
  );
};
