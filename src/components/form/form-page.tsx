import { Form, Select, Button, Input, Modal } from "antd";
// import { Container } from "../index.js";
import { AGES, CATEGORIES, RELATION } from "./form-constants.js";
import styles from "./form-page.module.scss";
import { MiniMap } from "./components/mini-map.js";
import { FormContext } from "./formContext.js";
import { useState } from "react";
// import { useAppDispatch } from "../../app/hooks.js";
// import { postIdea } from "../../app/actions/ideas.js";

export const FormPage = () => {
  // const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  // const success = () => {
  //   Modal.success({
  //     content:
  //       "Спасибо, что поделились своим мнением и помогаете стать Уссурийску лучше. Оно будет опубликовано на портале после проверки модератором.",
  //   });
  //   form.resetFields();
  // };

  // const onFinish = (values: any) => {
  //   dispatch(postIdea({ ...values, coordinates })).then(() => success());
  // };
  const [coordinates, setCoordinates] = useState<{ lng: number; lat: number }>({
    lat: 48.14,
    lng: 11.57,
  });

  return (
    <FormContext.Provider value={{ coordinates, setCoordinates }}>
      <h2>Help us to add more data</h2>
      <Form
        name="validate_other"
        layout="vertical"
        // onFinish={onFinish}
        form={form}
      >
        <div className={styles.form}>
          <div className={styles.column}>
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
              style={{ margin: 0 }}
            >
              <MiniMap />
              <p>
                Drag marker to select location of the builiding/spot/square/park
                or something else
              </p>
            </Form.Item>
          </div>
          <div className={styles.column}>
            <Form.Item
              name="name"
              label="Name"
              tooltip="Name"
              rules={[{ required: true, message: "Please, give the name" }]}
            >
              <Input maxLength={500} />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              tooltip="Short description"
              // rules={[{ required: true, message: "Опишите идею" }]}
            >
              <Input.TextArea showCount maxLength={1000} />
            </Form.Item>
            <Form.Item
              name="name"
              label="Имя"
              rules={[
                {
                  required: true,
                  message: "Укажите, пожалуйста, имя",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="age"
              label="Возраст"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Выберете вашу возрастную категорию",
                },
              ]}
            >
              <Select
                placeholder="Выберете вашу возрастную категорию"
                options={AGES}
              />
            </Form.Item>

            <Form.Item
              name="relation"
              label="Связь с городом"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Почему вам важно развитие Уссурийска?",
                },
              ]}
            >
              <Select
                placeholder="Почему вам важно развитие Уссурийска?"
                options={RELATION}
              />
            </Form.Item>
            <Form.Item
              name="contacts"
              label="Контакты"
              tooltip="Вы можете отставить свои контакты, и мы свяжемся с вами при необходимости"
            >
              <Input />
            </Form.Item>
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.column}></div>
          <div className={styles.column}>
            <Form.Item className={styles.button}>
              <Button type="primary" size="large" htmlType="submit">
                Send
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </FormContext.Provider>
  );
};
