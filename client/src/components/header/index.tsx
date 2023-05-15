import React from "react";
import styles from "./index.module.css";
import { Layout, Space, Typography } from "antd";
import { LoginOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import CustomButton from "../custom-button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Layout.Header className={styles.header}>
      <Space>
        <TeamOutlined className={styles.teamIcon} />
        <Link to="/">
          <CustomButton type="ghost">
            <Typography.Title level={1}>Employees</Typography.Title>
          </CustomButton>
        </Link>
      </Space>
      <Space>
        <Link to="/login">
          <CustomButton type="ghost" icon={<LoginOutlined />}>Login</CustomButton>
        </Link>
        <Link to="/register">
          <CustomButton type="ghost" icon={<UserOutlined />}>Register</CustomButton>
        </Link>
      </Space>
    </Layout.Header>
  );
};

export default Header;
