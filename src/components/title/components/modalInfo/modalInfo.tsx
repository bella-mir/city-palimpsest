import Modal from "antd/es/modal/Modal";

interface IModalInfoProps {
  onClose: () => void;
}

export const ModalInfo = ({ onClose }: IModalInfoProps) => {
  return (
    <Modal
      open={true}
      title="Information"
      footer={null}
      onCancel={onClose}
      width={520}
    >
      About our project.About our project.About our project.About our
      project.About our project.About our project.About our project.About our
      project.About our project.About our project.About our project.About our
      project.About our project.
      <span>&copy; Bella Mironova, Joselyn Salinas </span>
    </Modal>
  );
};
