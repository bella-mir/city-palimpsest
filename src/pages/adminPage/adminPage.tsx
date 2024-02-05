import { ColumnsType } from "antd/es/table/InternalTable";
import { Table } from "antd";
import { useEffect } from "react";
import { fetchIdeas } from "../../app/app-actions";
import { useAppDispatch, useAppSelector } from "../../app/app-types";
import { getUsersData, getUsersFeedback } from "../../app/app-selectors";
import styles from "./adminPage.module.scss";

export const AdminPage = () => {
  const dispatch = useAppDispatch();
  const usersData = useAppSelector(getUsersData);
  const usersFeedback = useAppSelector(getUsersFeedback);

  useEffect(() => {
    dispatch(fetchIdeas());
  }, []);

  const columnsData: ColumnsType<any> = [
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Location",
      dataIndex: "coordinates",
      key: "coordinates",
      render: (coords) => (
        <p>
          {coords?.lat}, {coords?.lng}
        </p>
      ),
    },

    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Architects",
      dataIndex: "architects",
      key: "architects",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Links",
      dataIndex: "links",
      key: "links",
    },
  ];

  const columnsFeedback: ColumnsType<any> = [
    {
      title: "Feedback",
      dataIndex: "feedback",
      key: "feedback",
    },
  ];

  return (
    <div className={styles.page}>
      <h2>Users' Data</h2>
      <Table columns={columnsData} dataSource={usersData || undefined} />
      <h2>Users' Feedback</h2>
      <Table
        columns={columnsFeedback}
        dataSource={usersFeedback || undefined}
      />
    </div>
  );
};
