import React, { useEffect, useState } from 'react'
import { Input, Row, Col, Card, Form, Upload, InputNumber, message, Cascader,Select, Button, Layout } from 'antd';
import { ImageSvg } from 'assets/svg/icon';
import CustomIcon from 'components/util-components/CustomIcon'
import { LoadingOutlined } from '@ant-design/icons';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import history from 'history';

const { Dragger } = Upload;
const { Option } = Select;


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
function EditCreate(props) {
const imageUploadProps = {
  name: 'file',
	multiple: true,
	listType: "picture-card",
	showUploadList: false,
  action: 'https://www.mocky.io	/v2/5cc8019d300000980a055e76'
}

const[userd, getUser] = useState();

const fetchUser = async() => {
	const userDetails = localStorage.getItem('user_id');
	const api = await axios.get(`http://lara.localhost/api/user-detail?&user_id=${userDetails}`);
	console.log(api.data.datas);
	getUser(api.data.datas)
};

useEffect(() => {
	fetchUser();
}, [])


const[addUser,setAddUser]=useState(null);
const history = useHistory();

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
  };


const onAddUser = (record)=>{
	setAddUser(true);
	setAddUser({...record})
	};

  const key = 'updatable';
  const registerSubmit = async (e) => {


	let image = userd?.image;
	let name = userd?.name;
	let email = userd?.email;
	let status = userd?.status;
	let role = userd?.role;
	let password = userd?.password;

	const data = new FormData()
	data.append('image', image);
	data.append('name', name);
	data.append('email', email);
	data.append('status', status);
	data.append('role', role);
	data.append('password', password);
	console.log(data);

  const id = userd?.id

  await axios.post(`http://lara.localhost/api/update-user/${id}`,data).then(res => {
			console.log(res)
      if(res.data.status === "success") 
      {
        message.loading({ content: 'Updating Please Wait...', key });
        setTimeout(() => {
          message.success({ content: 'Updated!', key, duration: 3 });
          window.location.reload();
        }, 1000);
      }
      else if(res.data.status === "failed")
      {
          
        message.loading({ content: 'Updating Please Wait...', key });
        setTimeout(() => {
          message.error({ content: 'Failed!', key, duration: 3 });
        }, 1000);
      }

		});


}

const cancelSubmit = (e) =>{
history.push('/app/components/data-display/table')
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
console.log(userd?.name)
return<div>
      <Form  encType='multipart/form-data'>
				<Form.Item label="Name" >
        <Input 
          name="name"
          value={userd?.name}
          onChange={(e)=>
          {
            getUser((pre)=>{
              return {...pre,name: e.target.value}
            })
          }}
          />
				</Form.Item>
				<Form.Item label="Email" rules={rules.email}>
					<Input name="email" placeholder="Email" value= {userd?.email} 
					   onChange={(e)=>
						{
							getUser((pre)=>{
							return {...pre,email: e.target.value}
						  })
						}}
					/>
				</Form.Item>
				<Form.Item label="Password" rules={rules.password}>
					<Input placeholder="Password" value= {userd?.password} 
					   onChange={(e)=>
						{
							getUser((pre)=>{
							return {...pre,password: e.target.value}
						  })
						}}
					/>
				</Form.Item>
				<Form.Item label="Role" rules={rules.role}>
				<Select name="role"
				value={userd?.role}
				style={{
				width: 100,
				}}
        onChange = {(e)=>
          {
            console.log(e)
            getUser((pre)=>{
              return {...pre,role: e}
            })
          }}
				>
				<Option value="admin">Admin</Option>
				<Option value="sigle">Single</Option>
			</Select>
			</Form.Item>
				<Form.Item label="Status" rules={rules.status} >
				<Select name="status"
				value={userd?.status}
				style={{
				width: 100,
				}}
        onChange = {(e)=>
          {
            console.log(e)
            getUser((pre)=>{
              return {...pre,status: e}
            })
          }}
				>
				<Option value="active">Active</Option>
				<Option value="deactive">Deactive</Option>
			</Select>
			</Form.Item>
      <Form.Item name="image" id="image" label="Image" >
					<Input type="file" name="image"
					onChange={(e)=>
						{
							getUser((pre)=>{
							return {...pre,image: e.target.files[0]}
						  })
						}}>

						</Input>
            <img src={`http://lara.localhost/${userd?.images}`} style={{color: "red", width: 100, height:100, borderRadius: 100}} alt="User-Image"></img>

				</Form.Item>
				<br />
    		<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <div>
        <Button onClick={cancelSubmit} style={{backgroundColor: "#d1d3d4"}}>Cancel</Button>
				<Button type="primary" style={{marginLeft: 15}}htmlType="submit"  onClick={registerSubmit}>
				Submit
				</Button>
        </div>
      			</Form.Item>
            </Form>
	</div>

}
export default EditCreate
