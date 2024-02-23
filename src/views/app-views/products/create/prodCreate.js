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
	image: [
		{
			required: true,
			message: 'Please Upload Image!',
		}
	],
	
}
function Prodcreate(event) {


const[addUser,setAddUser]=useState();
const history = useHistory();

const onAddUser = (record)=>{
	setAddUser(true);
	setAddUser({...record})
	};
	const data = addUser;
	console.log(data);


const registerSubmit = (e) => {
	let image = addUser?.image;
	let pname = addUser?.pname;
	let price = addUser?.price;
	let status = addUser?.status;
	let category = addUser?.category;
	let desc = addUser?.desc;

	const data = new FormData()
	data.append('image', image);
	data.append('pname', pname);
	data.append('price', price);
	data.append('status', status);
	data.append('category', category);
	data.append('desc', desc);
	console.log(data);

		axios.post('http://lara.localhost/api/add-product',data).then(res => {
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

const cancelSubmit = (e) =>{
	history.push('/app/products/list')
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
const  handleImage = (e) => {
	setAddUser({image:e.target.files[0]})
}
return<div>
<Form encType='multipart/form-data'>
				<Form.Item name="pname" label="Product Name" rules={rules.name}>
					<Input placeholder="Product Name" value= {addUser?.pname} 
					   onChange={(e)=>
						{
							setAddUser((pre)=>{
							return {...pre,pname: e.target.value}
						  })
						}}
					 />
				</Form.Item>
				<Form.Item name="price" label="Price"  rules={rules.price}>
					<Input placeholder="Price" value= {addUser?.price} 
					   onChange={(e)=>
						{
							setAddUser((pre)=>{
							return {...pre,price: e.target.value}
						  })
						}}
					/>
				</Form.Item>
				<Form.Item label="Category" >
				<Select
				value={addUser?.category}
				style={{
				width: 120,
				}}
				onChange = {(e)=>
					{
					  console.log(e)
					  setAddUser((pre)=>{
						return {...pre,category: e}
					  })
					}}

				>
				<Option value="electronics">Electronics</Option>
				<Option value="fashion">Fashion</Option>
			</Select>
			</Form.Item>
				<Form.Item label="Status" rules={rules.status} >
				<Select
				value={addUser?.status}
				style={{
				width: 120,
				}}
				onChange = {(e)=>
					{
					  console.log(e)
					  setAddUser((pre)=>{
						return {...pre,status: e}
					  })
					}}

				>
				<Option value="available">Available</Option>
				<Option value="unavailable">Unavailable</Option>
			</Select>
			</Form.Item>
      <Form.Item name="desc" label="Description" >
					<Input.TextArea placeholder="Description" value= {addUser?.desc} 
					   onChange={(e)=>
						{
							setAddUser((pre)=>{
							return {...pre,desc: e.target.value}
						  })
						}}
					/>
				</Form.Item>
				<Form.Item name="image" id="image" label="Image"  rules={rules.image}>
					<Input type="file" name="image" value= {addUser?.image}
					onChange={(e)=>
						{
							setAddUser((pre)=>{
							return {...pre,image: e.target.files[0]}
						  })
						}}>

						</Input>

				</Form.Item>
				<br />
    		<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
				<Button onClick={cancelSubmit} style={{backgroundColor: "#d1d3d4"}}>Cancel</Button>
				<Button type="primary" style={{marginLeft: 15}} htmlType="submit" onClick={registerSubmit}>
				Submit
				</Button>
      			</Form.Item>			
	</Form>
	</div>

}
export default Prodcreate
