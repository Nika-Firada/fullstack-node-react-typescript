import React from "react";
import { Button, Form } from "antd";

type Props = {
  children: React.ReactNode;
  htmlType?: "button" | "submit" | "reset";
  onClick?: () => void;
  type?: "link" | "text" | "ghost" | "default" | "primary" | "dashed";
  danger?: boolean;
  loading?: boolean;
  shape?: "default" | "circle" | "round";
  icon?: React.ReactNode;
};
const CustomButton: React.FC<Props> = ({
  icon,
  shape,
  danger,
  children,
  htmlType = "button",
  type,
  onClick,
  loading,
}) => {
  return (
    <Form.Item>
      <Button
        icon={icon}
        shape={shape}
        loading={loading}
        danger={danger}
        onClick={onClick}
        type={type}
        htmlType={htmlType}
      >
        {children}
      </Button>
    </Form.Item>
  );
};

export default CustomButton;
