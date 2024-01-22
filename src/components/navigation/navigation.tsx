import Radio, { RadioChangeEvent } from "antd/es/radio";
import styles from "./navigation.module.scss";
import { useAppDispatch } from "../../app/app-types";
import { setNewSelectedLayer } from "../../app/app-actions";

export const Navigation = () => {
  const dispatch = useAppDispatch();

  const onChange = (e: RadioChangeEvent) => {
    dispatch(setNewSelectedLayer(e.target.value));
  };

  return (
    <div className={styles.panel}>
      <Radio.Group defaultValue="buildings" onChange={onChange}>
        <Radio.Button value="buildings">Buildings</Radio.Button>
        <Radio.Button value="parks">Parks, Cemeteries and Squares</Radio.Button>
        <Radio.Button value="spots">Spots</Radio.Button>
      </Radio.Group>
    </div>
  );
};
