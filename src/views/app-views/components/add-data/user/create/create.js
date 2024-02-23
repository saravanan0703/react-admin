import React, { useState } from 'react'
import { Input, Row, Col, Card, Form, Upload, InputNumber, message, Cascader,Select, Button, Layout } from 'antd';
import { ImageSvg } from 'assets/svg/icon';
import CustomIcon from 'components/util-components/CustomIcon'
import { LoadingOutlined } from '@ant-design/icons';
import axios from "axios";
import { useHistory } from 'react-router-dom';


const { Dragger } = Upload;
const { Option } = Select;

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
  };

  const options = [
	{
	  value: 'option1',
	  label: 'Option1',
	  children: [
		{
		  value: 'option11',
		  label: 'Option11',
		  children: [
			{
			  value: 'option12',
			  label: 'Option 12',
			},
		  ],
		},
	  ],
	},
	{
	  value: 'option2',
	  label: 'Option2',
	  children: [
		{
		  value: 'option21',
		  label: 'Option21',
		  children: [
			{
			  value: 'option22',
			  label: 'Option 22',
			},
		  ],
		},
	  ],
	},
  ];

  function onChange(value) {
	console.log(value);
  }
  function displayRender(label) {
	return label[label.length - 1];
  }

const rules = {
	name: [
		{
			required: true,
			message: 'Please enter the name',
		}
	],
	status: [
		{
			required: true,
			message: 'Please Select the Status',
		}
	],
	role: [
		{
			required: true,
			message: 'Please Select the Role',
		}
	],
	password: [
		{
			required: true,
			message: 'Please enter the Password',
		}
	],
	email: [
		{
			required: true,
			message: 'Please enter the Email',
		},
		{ 
			type: 'email',
			message: 'Please enter a validate email!'
		}
	],
	images: [
		{
			required: true,
			message: 'Please Upload Image!',
		}
	],
	
}
function UserCreate(props) {
const imageUploadProps = {
  name: 'file',
	multiple: true,
	listType: "picture-card",
	showUploadList: false,
  action: 'https://www.mocky.io	/v2/5cc8019d300000980a055e76'
}

const[registerInput , setRegister] = useState({
	name: "",
	email:"",
	password:"",
	images:"",
	status:"",
	role: ""
});
const[addUser,setAddUser]=useState(null);
const history = useHistory();

const onAddUser = (record)=>{
	setAddUser(true);
	setAddUser({...record})
	};

const registerSubmit = (e) => {


	const data = addUser;
	console.log(data);

		axios.post('http://lara.localhost/api/register',data).then(res => {
			if(res.data.status === "success")
			{
			setAddUser(res.data.user);
			history.push('/app/components/data-display/table');			
		}
			else
			{
				setAddUser({...addUser, error_list:res.data.validation_errors  });

			}

		});


}


const beforeUpload = file => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

const uploadData = {}

return<div>
	<Row gutter={16}>
		<Col xs={24} sm={24} md={17}>
			<Card title="User Create">
				<Form.Item name="name" label="Name" rules={rules.name}>
					<Input placeholder="Name" value= {addUser?.name} 
					   onChange={(e)=>
						{
							setAddUser((pre)=>{
							return {...pre,name: e.target.value}
						  })
						}}
					 />
				</Form.Item>
				<Form.Item name="email" label="Email" rules={rules.email}>
					<Input placeholder="Email" value= {addUser?.email} 
					   onChange={(e)=>
						{
							setAddUser((pre)=>{
							return {...pre,email: e.target.value}
						  })
						}}
					/>
				</Form.Item>
				<Form.Item name="password" label="Password" rules={rules.password}>
					<Input placeholder="Password" value= {addUser?.password} 
					   onChange={(e)=>
						{
							setAddUser((pre)=>{
							return {...pre,password: e.target.value}
						  })
						}}
					/>
				</Form.Item>
				<Form.Item label="Role" rules={rules.role}>
				<Select
        disabled
				value="Single"
				style={{
				width: 100,
				}}
			
				>
				<Option value="admin">Admin</Option>
				<Option value="sigle">Single</Option>
			</Select>
			</Form.Item>
				<Form.Item label="Status" rules={rules.status} >
				<Select
        disabled
				value="Active"
				style={{
				width: 100,
				}}

				>
				<Option value="active">Active</Option>
				<Option value="deactive">Deactive</Option>
			</Select>
			</Form.Item>
	
				
				<br />
    			  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
				<Button type="primary" htmlType="submit" onClick={registerSubmit}>
				Submit
				</Button>
      			</Form.Item>
			</Card>
			
		</Col>
	</Row>
	</div>

}
export default UserCreate
