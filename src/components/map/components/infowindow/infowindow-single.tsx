import { MapGeoJSONFeature } from "react-map-gl";
import styles from "./infowindow.module.scss";
import { COLUMNS } from "./infowindow-constants";

export const InfowindowSingle = ({
  popupInfo,
}: {
  popupInfo: MapGeoJSONFeature[];
}) => {
  const layer = popupInfo[0];
  return (
    <div className={styles.card}>
      <span className={styles.title}>{layer.layer.id}</span>
      <table>
        <tbody className={styles.featuresList}>
          {layer.properties &&
            Object.entries(COLUMNS).map(([key, value]) => {
              return (
                <tr key={key}>
                  <td className={styles.fieldName}>{value}</td>
                  <td>{layer.properties && layer.properties[key]}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
