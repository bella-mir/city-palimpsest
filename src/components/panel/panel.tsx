import "maplibre-gl/dist/maplibre-gl.css";

import styles from "./panel.module.scss";
import { useSelector } from "react-redux";
import { getSelectedFeature } from "../../app/app-selectors";
import { COLUMNS } from "./panel-constants";
import { isValidURL } from "../../utils";

export const Panel = () => {
  const selectedFeature = useSelector(getSelectedFeature);

  if (!selectedFeature) {
    return;
  }

  return (
    <div className={styles.panel}>
      {Object.keys(COLUMNS).map((key) => (
        <div key={key}>
          {selectedFeature[key] && (
            <div className={styles.block}>
              <span className={styles.value}>{COLUMNS[key]}</span>
              <span className={styles.key}>
                {isValidURL(selectedFeature[key]) ? (
                  <a href={selectedFeature[key]} target="_blank">
                    Link
                  </a>
                ) : (
                  selectedFeature[key]
                )}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
