import Radio from "antd/es/radio";
import styles from "./navigation.module.scss";

export const Navigation = () => {
  return (
    <div className={styles.panel}>
      <Radio.Group defaultValue="buildings">
        <Radio.Button value="buildings">Buildings</Radio.Button>
        <Radio.Button value="parks">Parks, Cemeteries and Squares</Radio.Button>
        <Radio.Button value="spots">Spots</Radio.Button>
      </Radio.Group>
    </div>
  );
};
