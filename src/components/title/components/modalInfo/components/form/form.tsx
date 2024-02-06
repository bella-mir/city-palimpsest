import {
  Form,
  Select,
  Button,
  Input,
  InputNumber,
  Radio,
  RadioChangeEvent,
  Modal,
} from "antd";
import { CATEGORIES } from "./form-constants.ts";
import styles from "./form.module.scss";
import { MiniMap } from "./components/mini-map.js";
import { FormContext } from "./formContext.js";
import { useState } from "react";
import { RollbackOutlined } from "@ant-design/icons";
import { postIdea } from "../../../../../../app/app-actions.ts";
import { useAppDispatch } from "../../../../../../app/app-types.ts";

interface IFormProps {
  setMode?: (value: "info" | "feedback") => void;
}

export const FormModule = ({ setMode }: IFormProps) => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const [formMode, setFromMode] = useState<"data" | "feedback">("feedback");

  const success = () => {
    Modal.success({
      content: "Thank you for your feedback! We really aprreciate it!",
    });
    form.resetFields();
  };

  const onFinish = (values: any) => {
    dispatch(postIdea({ ...values, coordinates })).then(() => success());
    setMode && setMode("info");
  };

  const [coordinates, setCoordinates] = useState<{ lng: number; lat: number }>({
    lat: 48.14,
    lng: 11.57,
  });

  return (
    <>
      <FormContext.Provider value={{ coordinates, setCoordinates }}>
        <Radio.Group
          defaultValue="feedback"
          className={styles.radioGroup}
          onChange={(e: RadioChangeEvent) => setFromMode(e.target.value)}
          size={"small"}
        >
          <Radio.Button value="feedback" className={styles.radioButton}>
            Give feedback
          </Radio.Button>
          <Radio.Button value="data" className={styles.radioButton}>
            Add Data
          </Radio.Button>
        </Radio.Group>
        <div className={styles.content}>
          {formMode === "data" ? (
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
                  rules={[
                    { required: true, message: "Please, provide a name" },
                  ]}
                >
                  <Input maxLength={500} />
                </Form.Item>
                <Form.Item
                  name="year"
                  label="Year"
                  tooltip="Year of completion"
                >
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
          ) : (
            <Form
              name="validate_other"
              layout="vertical"
              onFinish={onFinish}
              form={form}
              size={"small"}
            >
              <Form.Item
                name="feedback"
                label="Your thoughts and suggestions"
                tooltip="Tell us what you think about the project. We would really appreciate your feedback"
              >
                <Input.TextArea
                  showCount
                  maxLength={1000}
                  className={styles.textDescription}
                />
              </Form.Item>
              <Form.Item className={styles.button}>
                <Button type="primary" htmlType="submit">
                  Share
                </Button>
              </Form.Item>
            </Form>
          )}
        </div>

        <div className={styles.footer}>
          <Button
            type="link"
            className={styles.linkBack}
            onClick={() => setMode && setMode("info")}
          >
            Back to Project Description <RollbackOutlined />
          </Button>
        </div>
      </FormContext.Provider>
    </>
  );
};
