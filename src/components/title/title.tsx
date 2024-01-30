// import logo from "./asserts/Tel_Aviv_university_logo.svg";
import info from "./asserts/info.svg";
import styles from "./title.module.scss";
import { ModalData, ModalInfo } from "./components";
import { useToogle } from "../../utils";
import Button from "antd/es/button";
import { HeartOutlined } from "@ant-design/icons";
import Tooltip from "antd/es/tooltip";

export const Title = () => {
  const [isInfoWindowVisible, toggleInfoWindow] = useToogle(false);
  const [isAddDataWindowVisible, toggleAddDataWindow] = useToogle(false);

  return (
    <>
      <div className={styles.title}>
        <div className={styles.text}>
          <span>
            The <span className={styles.selected}>Living</span> Past of Munich
          </span>
          <span className={styles.subtitle}> City as a Palimpsest</span>
          <Tooltip title="Add data to the map" placement="left">
            <Button
              type="link"
              className={styles.buttonAdd}
              onClick={toggleAddDataWindow}
              title="Add data"
            >
              Make Map Live
              <HeartOutlined />
            </Button>
          </Tooltip>
        </div>
        {
          <img
            src={info}
            onClick={toggleInfoWindow}
            className={styles.button}
          />
        }
      </div>
      {isInfoWindowVisible && <ModalInfo onClose={toggleInfoWindow} />}
      {isAddDataWindowVisible && <ModalData onClose={toggleAddDataWindow} />}
    </>
  );
};
