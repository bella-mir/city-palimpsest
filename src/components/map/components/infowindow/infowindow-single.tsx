// import { MapGeoJSONFeature } from "react-map-gl";
import styles from "./infowindow.module.scss";
import { COLUMNS } from "./infowindow-constants";
import { Button } from "antd";
import { BulbOutlined } from "@ant-design/icons";
import { useAppDispatch } from "../../../../app/app-types";
import { setShowInfo } from "../../../../app/app-actions";

export const InfowindowSingle = ({ popupInfo }: { popupInfo: any }) => {
  const dispatch = useAppDispatch();
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
      <Button
        type="link"
        size="small"
        className={styles.button}
        onClick={() => dispatch(setShowInfo(true))}
      >
        Learn more
        <BulbOutlined />
      </Button>
    </div>
  );
};
