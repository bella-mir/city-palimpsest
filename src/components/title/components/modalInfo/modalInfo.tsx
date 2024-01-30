import Modal from "antd/es/modal/Modal";
import styles from "./modalInfo.module.scss";
import { Description, Form } from "./components";
import { useState } from "react";

interface IModalInfoProps {
  onClose: () => void;
}

export const ModalInfo = ({ onClose }: IModalInfoProps) => {
  const [mode, setMode] = useState<"info" | "feedback">("info");

  return (
    <Modal
      open={true}
      title={`City as a Palimpsest ${
        mode === "feedback" ? " – Feedback Form" : ""
      }`}
      footer={null}
      onCancel={onClose}
      width={520}
      className={styles.modal}
    >
      {mode === "info" ? (
        <Description setMode={setMode} />
      ) : (
        <Form setMode={setMode} />
      )}
    </Modal>
  );
};
