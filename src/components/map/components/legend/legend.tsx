import { CATEGORIES, LEGEND_COLORS } from "./legend-constants";
import classNames from "classnames";
import styles from "./legend.module.scss";
import Select from "antd/es/select";
import { useAppDispatch } from "../../../../app/app-types";
import { setFilter } from "../../../../app/app-actions";
import { useSelector } from "react-redux";
import { getFilter } from "../../../../app/app-selectors";

export const Legend = () => {
  const dispatch = useAppDispatch();
  const filter = useSelector(getFilter);

  const filterClass = (index: number) => {
    if (filter === "all") {
      return true;
    } else {
      return index === filter - 1;
    }
  };

  const onChange = (value: "all" | 1 | 2 | 3 | 4 | 5 | 6 | 7) => {
    dispatch(setFilter(value));
  };

  return (
    <div className={classNames(styles.legend, styles.panel)}>
      <span className={styles.title}>Stages of Development</span>
      <Select
        placeholder="Stages"
        options={CATEGORIES}
        defaultValue={"all"}
        size="small"
        className={styles.selector}
        onChange={onChange}
      />
      {Object.keys(LEGEND_COLORS).map((key, index) => (
        <div key={key} className={styles.row}>
          <div
            className={styles.cube}
            style={{
              backgroundColor: `${LEGEND_COLORS[key]}`,
              borderColor: LEGEND_COLORS[key],
              opacity: filterClass(index) ? 1 : 0.3,
            }}
          ></div>
          <span
            className={classNames({ [styles.selected]: filterClass(index) })}
            style={{
              opacity: filterClass(index) ? 1 : 0.5,
            }}
          >
            {key}
          </span>
        </div>
      ))}
    </div>
  );
};
