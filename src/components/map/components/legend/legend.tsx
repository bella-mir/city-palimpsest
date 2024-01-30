import { LEGEND_COLORS } from "./legend-constants";
import classNames from "classnames";
import styles from "./legend.module.scss";

export const Legend = () => {
  return (
    <div className={classNames(styles.legend, styles.panel)}>
      <span className={styles.title}>Stages of Development</span>
      {Object.keys(LEGEND_COLORS).map((key) => (
        <div key={key} className={styles.row}>
          <div
            className={styles.cube}
            style={{
              backgroundColor: `${LEGEND_COLORS[key]}`,
              borderColor: LEGEND_COLORS[key],
            }}
          ></div>
          <span>{key}</span>
        </div>
      ))}
    </div>
  );
};
