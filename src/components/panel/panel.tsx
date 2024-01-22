import "maplibre-gl/dist/maplibre-gl.css";
// import { Link } from "react-router-dom";
import styles from "./panel.module.scss";
import { useSelector } from "react-redux";
import { getIsInfoShown, getSelectedFeature } from "../../app/app-selectors";
import { COLUMNS } from "./panel-constants";
import { isValidURL } from "../../utils";

export const Panel = () => {
  const selectedFeature = useSelector(getSelectedFeature);
  const isInfoShowed = useSelector(getIsInfoShown);

  if (!selectedFeature || !isInfoShowed) {
    return;
  }

  return (
    <div className={styles.panel}>
      <div>
        <span className={styles.title}>
          {`${selectedFeature[`Current Name (DE)`]} `}
        </span>
        <span className={styles.subtitle}>
          ({`${selectedFeature[`Current Name (Eng)`]} `})
        </span>
      </div>
      {Object.keys(COLUMNS).map((key) => (
        <>
          {selectedFeature[key] && (
            <div className={styles.block}>
              {isValidURL(selectedFeature[key]) ? (
                <a
                  href={selectedFeature[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.key}
                >
                  {COLUMNS[key]}
                </a>
              ) : (
                <>
                  <span className={styles.value}>{COLUMNS[key]}</span>
                  <span className={styles.key}>{selectedFeature[key]}</span>
                </>
              )}
            </div>
          )}
        </>
      ))}
    </div>
  );
};
