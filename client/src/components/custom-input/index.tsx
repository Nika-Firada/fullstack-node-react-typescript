import { Form, Input } from 'antd'
import React from 'react'

type Props = {
    name: string,
    placeholder: string,
    type?:string
}
const CustomInput:React.FC<Props> = ({name, placeholder, type = 'text'}) => {
  return (
    <Form.Item rules={[{required: true, message: 'Required field'}]} name={name} shouldUpdate={true}>
        <Input placeholder={placeholder} type={type} size='large' />
    </Form.Item>
  )
}

export default CustomInput