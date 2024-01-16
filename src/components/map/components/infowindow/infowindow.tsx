import { MapGeoJSONFeature } from "react-map-gl";
import { InfowindowSingle } from "./infowindow-single";
// import { InfowindowMultiple } from "./infowindow-multiple";

// export const Infowindow = ({
//   popupInfo,
// }: {
//   popupInfo: MapGeoJSONFeature[];
// }) => {
//   return popupInfo.length === 1 ? (
//     <InfowindowSingle popupInfo={popupInfo} />
//   ) : (
//     <InfowindowMultiple popupInfo={popupInfo} />
//   );
// };

export const Infowindow = ({
  popupInfo,
}: {
  popupInfo: MapGeoJSONFeature[];
}) => {
  return <InfowindowSingle popupInfo={popupInfo} />;
};
