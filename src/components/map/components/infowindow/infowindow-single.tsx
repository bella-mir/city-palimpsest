// import { MapGeoJSONFeature } from "react-map-gl";
import styles from "./infowindow.module.scss";
import { COLUMNS } from "./infowindow-constants";
import { Button } from "antd";
import { BulbOutlined } from "@ant-design/icons";

export const InfowindowSingle = ({ popupInfo }: { popupInfo: any }) => {
  return (
    <div className={styles.card}>
      <span className={styles.title}>{popupInfo[`Current Name (DE)`]}</span>
      <span className={styles.subtitle}>
        ({popupInfo[`Current Name (Eng)`]})
      </span>
      <table>
        <tbody className={styles.featuresList}>
          {popupInfo &&
            Object.entries(COLUMNS).map(([key, value]) => {
              return (
                <tr key={key}>
                  <td className={styles.fieldName}>{value}</td>
                  <td>{popupInfo[key]}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Button type="link" size="small" className={styles.button}>
        Learn more
        <BulbOutlined />
      </Button>
    </div>
  );
};
