import { Form, Input } from "antd";
import { NamePath } from "antd/es/form/interface";

type Props = {
  name: string;
  placeholder: string;
  dependencies?: NamePath[];
};
const PasswordInput: React.FC<Props> = ({
  name,
  placeholder,
  dependencies,
}) => {
  return (
    <Form.Item
      name={name}
      dependencies={dependencies}
      hasFeedback
      rules={[
        { required: true, message: "Required field" },
        ({ getFieldValue }) => ({
          validator(_,value){
            if(!value){
                return Promise.resolve();
            }
            if(name === 'confirmPassword'){
                if(!value || getFieldValue(("password")) === value){
                    return Promise.resolve();
                }
                return Promise.reject(new Error('Passwords need to match'));
            }else{
                if(value.length < 5){
                    return Promise.reject(new Error("Password should be more then 5 character"))
                }
                return Promise.resolve();
            }
          },
        }),
      ]}
    >
      <Input.Password placeholder={placeholder} size="large" />
    </Form.Item>
  );
};

export default PasswordInput;
