import { useState } from "react";
import { Card, Form, Row, Space, Typography } from "antd";
import CustomInput from "../../components/custom-input";
import PasswordInput from "../../components/password-input";
import CustomButton from "../../components/custom-button";
import { Link, useNavigate } from "react-router-dom";
import { UserData, useLoginMutation } from "../../redux/services/auth";
import { isErrorWithMessage } from "../../utils/is-error-with-message";
import ErrorMessage from "../../components/error-message";

const Login = () => {
  const navigate = useNavigate();
  const [loginUser, loginUserResult] = useLoginMutation();
  const [error, setError] = useState('');
  const login = async (data: UserData) => {
    try {
      await loginUser(data).unwrap();
      navigate('/')
    } catch (err) {
      const maybeErr = isErrorWithMessage(err);
      if(maybeErr){
        setError(err.data.message);
      }else{
        setError('Oops... Unknown error!?');
      }
    }
  };

  return (
    <Row align="middle" justify="center">
      <Card title="Login" style={{ width: "30rem" }}>
        <Form onFinish={login}>
          <CustomInput type="email" name="email" placeholder="Email" />
          <PasswordInput name="password" placeholder="Password" />
          <CustomButton htmlType="submit" type="primary" children="Login" />
        </Form>
        <Space direction="vertical" size="large">
          <Typography.Text>
            New User? <Link to="/register">Take registration here</Link>
          </Typography.Text>
          <ErrorMessage message={error} />
        </Space>
      </Card>
    </Row>
  );
};

export default Login;
