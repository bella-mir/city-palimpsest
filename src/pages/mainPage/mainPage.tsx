import { MapContainer, Navigation, Panel, Title } from "../../components";
import styles from "./mainPage.module.scss";

export const MainPage = () => (
  <>
    <div className={styles.panel}>
      <Title />
      <Navigation />
      <Panel />
    </div>
    <MapContainer />
  </>
);
