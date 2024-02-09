import { MapGeoJSONFeature } from "react-map-gl";
import { InfowindowSingle } from "./infowindow-single";

export const Infowindow = ({
  popupInfo,
}: {
  popupInfo: MapGeoJSONFeature[];
}) => {
  return <InfowindowSingle popupInfo={popupInfo} />;
};
