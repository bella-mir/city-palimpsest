import Modal from "antd/es/modal/Modal";
import styles from "./modalInfo.module.scss";

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
        <span>
          About our project.About our project.About our project.About our
          project.About our project.About our project.About our project.About
          our project.About our project.About our project.About our
          project.About our project.About our project.
        </span>

        <span className={styles.copyright}>
          &copy; Bella Mironova, Joselyn Salinas<br></br> TUM, Cartography M.Sc,
          2024
        </span>
      </div>
    </Modal>
  );
};
