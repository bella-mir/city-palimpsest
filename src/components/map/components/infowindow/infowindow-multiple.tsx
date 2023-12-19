import { useState } from "react";
import { MapGeoJSONFeature } from "react-map-gl";
import Button from "antd/es/button/button";
import { InfowindowSingle } from "./infowindow-single";
import styles from "./infowindow.module.scss";

export const InfowindowMultiple = ({
  popupInfo,
}: {
  popupInfo: MapGeoJSONFeature[];
}) => {
  const [selectedInfo, setSelectedInfo] = useState<
    MapGeoJSONFeature | undefined
  >(undefined);

  return selectedInfo ? (
    <>
      <InfowindowSingle popupInfo={[selectedInfo]}></InfowindowSingle>
      <Button
        onClick={() => setSelectedInfo(undefined)}
        type="link"
        style={{ right: 0 }}
      >
        &rarr;
      </Button>
    </>
  ) : (
    <ol className={styles.card}>
      <div className={styles.list}>
        {popupInfo?.map((feature: MapGeoJSONFeature, index: number) => (
          <Button
            onClick={() => setSelectedInfo(feature)}
            type="link"
            key={index}
          >
            <li key={index} className={styles.listElement}>
              {feature.properties?.landuse}
            </li>
          </Button>
        ))}
      </div>
    </ol>
  );
};
