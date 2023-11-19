import "maplibre-gl/dist/maplibre-gl.css";
import styles from "./main.module.scss";

export const Main = () => {
  return (
    <div className={styles.box}>
      <h1 className={styles.title}>
        The living past <br></br> of Munich
      </h1>
      <span className={styles.subtitle}>City as a palimpsest</span>
    </div>
  );
};
