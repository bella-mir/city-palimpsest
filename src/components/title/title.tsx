// import logo from "./asserts/Tel_Aviv_university_logo.svg";
import info from "./asserts/info.svg";
import styles from "./title.module.scss";
import { ModalInfo } from "./components";
import { useToogle } from "../../utils";

export const Title = () => {
  const [isInfoWindowVisible, toggleInfoWindow] = useToogle(false);

  return (
    <>
      <div className={styles.title}>
        <div className={styles.text}>
          <span>The living past of Munich</span>
          <span className={styles.subtitle}> City as a Palimpsest</span>
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
    </>
  );
};
