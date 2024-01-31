import { useState } from "react";
import { MiniMap } from "./components/form/components/mini-map";
import { CATEGORIES } from "./components/form/form-constants";
import { FormContext } from "./components/form/formContext";
import styles from "./modalInfo.module.scss";
import { Button, Form, Input, InputNumber, Modal, Select } from "antd";

interface IModalInfoProps {
  onClose: () => void;
}

export const ModalData = ({ onClose }: IModalInfoProps) => {
  const [form] = Form.useForm();

  const [coordinates, setCoordinates] = useState<{ lng: number; lat: number }>({
    lat: 48.14,
    lng: 11.57,
  });
  const success = () => {
    Modal.success({
      content:
        "Thank you for your work! You will see your data on the map soon!",
    });
    form.resetFields();
  };

  const onFinish = () => {
    success();
  };
  return (
    <Modal
      open={true}
      title="Make Map Live – Add data"
      footer={null}
      onCancel={onClose}
      width={520}
      className={styles.modal}
    >
      <FormContext.Provider value={{ coordinates, setCoordinates }}>
        <div className={styles.content}>
          <Form
            name="validate_other"
            layout="vertical"
            onFinish={onFinish}
            form={form}
            size={"small"}
          >
            <div className={styles.form}>
              <Form.Item
                name="category"
                label="Type"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "You need to select type",
                  },
                ]}
              >
                <Select placeholder="Select type" options={CATEGORIES} />
              </Form.Item>
              <Form.Item
                name="location"
                label="Location"
                tooltip="Drag marker to select location"
                style={{ margin: 0, fontSize: 12 }}
              >
                <MiniMap />
                <p className={styles.note}>
                  Drag marker to select location of the
                  builiding/spot/square/park or something else
                </p>
              </Form.Item>

              <Form.Item
                name="name"
                label="Name"
                tooltip="Name"
                rules={[{ required: true, message: "Please, provide a name" }]}
              >
                <Input maxLength={500} />
              </Form.Item>
              <Form.Item name="year" label="Year" tooltip="Year of completion">
                <InputNumber min={-1000} max={2025} />
              </Form.Item>
              <Form.Item
                name="architects"
                label="Architect/Artist/Author"
                tooltip="Architect/Artist/Author"
              >
                <Input maxLength={500} />
              </Form.Item>
              <Form.Item
                name="description"
                label="Description"
                tooltip="Short description"
              >
                <Input.TextArea showCount maxLength={1000} />
              </Form.Item>
              <Form.Item name="links" label="Links" tooltip="Relevant links">
                <Input.TextArea showCount maxLength={1000} />
              </Form.Item>
            </div>

            <div className={styles.form}>
              <Form.Item className={styles.button}>
                <Button type="primary" htmlType="submit">
                  Share
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </FormContext.Provider>
    </Modal>
  );
};
