import Modal from "antd/es/modal/Modal";
import styles from "./modalInfo.module.scss";
import { Button } from "antd";

interface IModalInfoProps {
  onClose: () => void;
}

export const ModalInfo = ({ onClose }: IModalInfoProps) => {
  return (
    <Modal
      open={true}
      title="City as a Palimpsest"
      footer={null}
      onCancel={onClose}
      width={520}
    >
      <div className={styles.content}>
        <span className={styles.description}>
          About our project.About our project.About our project.About our
          project.About our project.About our project.About our project.About
          our project.About our project.About our project.About our
          project.About our project.About our project.
        </span>
        <Button>Help us to add more data</Button>

        <span className={styles.copyright}>
          Bella Mironova, Joselyn Salinas<br></br>&copy; TUM, Cartography M.Sc,
          2024
        </span>
      </div>
    </Modal>
  );
};
