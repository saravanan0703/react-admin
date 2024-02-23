/*
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Alert } from "antd";
import { signUp, showAuthMessage, showLoading, hideAuthMessage } from 'redux/actions/Auth';
import { useHistory } from "react-router-dom";
import { motion, useSpring } from "framer-motion"
import axios from 'axios';
import { Typography, message as msg } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { WindowScroller } from 'react-virtualized';
import { put } from 'redux-saga/effects';

export const RegisterForm = (props) => {
	
const { 

	showAuthMessage,

} = props
	const[registerInput , setRegister] = useState();

const [state, setState] = useState({
	name:''
})

const [errors, setErros] = useState();

const registerSubmit = (val) => {
	//e.preventDefault();



	const data = {
		name: val.name,
		email: val.email,
		password: val.password,
		
	}
	
	axios.get('http://lara.localhost/api/sanctum/csrf-cookie').then(response => {
		axios.post('http://lara.localhost/api/register', data).then(res => {
			showLoading();
			console.log(res)
			if(res.status == 201)
			{
				window.location.reload('/app/dashboards/default');
				//setRegister(res.data.user);
			}
			else 
			{
				
				//console.log(res.data.datas[0].email)
				form.setFields([
					{
						name: 'email',
						errors: res.data.email,
					},
					{
						name: 'password',
						errors: res.data.password,
					},
				]);
				console.log((JSON.stringify(res.data)))
				put(showAuthMessage(res.status));
				
			}

		})
	})
	
}

//const err = JSON.stringify(errors);
console.log(errors)




var rules = {
	email: [
		{ 
			required: true,
			message: 'Please input your email address',

		},
		{ 
			type: 'email',
			message: 'Please enter a validate E-mail!'
		}
	],
	password: [
		{ 
			required: true,
			message: 'Please input your Password!',
			}
	],
	name: [
		{ 
			required: true,
			message: 'Please enter a Name!',
			}
	],
}



const { Text, Link } = Typography;


const { signUp, showLoading, token, loading, redirect, message, showMessage, hideAuthMessage, allowRedirect } = props

	const [form] = Form.useForm();
	let history = useHistory();
	const onSignUp = () => {
		console.log(errors)
    	form.validateFields().then(values => {
			//showLoading()
			console.log(values);
			form.setFields([
				{
				  name: 'email',
				  errors: errors,
				},
			]);
			registerSubmit(values);
		}).catch(info => {
			console.log('Validate Failed:', info);
		});
	}

	useEffect(() => {
		if (token !== null && allowRedirect) {
			history.push(redirect)
		}
		if(showMessage) {
			setTimeout(() => {
				hideAuthMessage();
			}, 4000);
		}
	});
	

	return (
		<>
			<motion.div initial={{ opacity: 0, marginBottom: 0 }} 
				animate={{ 
					opacity: showMessage ? 1 : 0,
					marginBottom: showMessage ? 20 : 0 
				}}>  
				<Alert type="error" showIcon message={message}></Alert>
			</motion.div>
			<Form form={form} layout="vertical" name="register-form" onFinish={onSignUp}>
				<Form.Item 
					name="email" 
					label="Email" 
					rules={rules.email}
					hasFeedback
				>
					<Input prefix={<MailOutlined className="text-primary" />}/>
				</Form.Item>
				<Form.Item 
					name="name" 
					label="Name" 
					rules={rules.name}
					hasFeedback
				>
					<Input  prefix={<MailOutlined className="text-primary" />}/>
				</Form.Item>
				<Form.Item 
					name="password" 
					label="Password" 
					rules={rules.password}
					hasFeedback
				>
					<Input.Password prefix={<LockOutlined className="text-primary" />}/>
				</Form.Item>
				
				<Form.Item>
					<Button type="primary" htmlType="submit" block loading={loading}>
						Sign Up
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}

const mapStateToProps = ({auth}) => {
	const { loading, message, showMessage, token, redirect } = auth;
  return { loading, message, showMessage, token, redirect }
}

const mapDispatchToProps = {
	signUp,
	showAuthMessage,
	hideAuthMessage,
	showLoading
}


export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)

*/




import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Alert } from "antd";
import { signUp, showAuthMessage, showLoading, hideAuthMessage } from 'redux/actions/Auth';
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"

const rules = {
	email: [
		{ 
			required: true,
			message: 'Please input your email address'
		},
		{ 
			type: 'email',
			message: 'Please enter a validate email!'
		}
	],
	password: [
		{ 
			required: true,
			message: 'Please input your password'
		}
	],
	confirm: [
		{ 
			required: true,
			message: 'Please confirm your password!'
		},
		({ getFieldValue }) => ({
			validator(rule, value) {
				if (!value || getFieldValue('password') === value) {
					return Promise.resolve();
				}
				return Promise.reject('Passwords do not match!');
			},
		})
	]
}

export const RegisterForm = (props) => {

	const { signUp, showLoading, token, loading, redirect, message, showMessage, hideAuthMessage, allowRedirect } = props
	const [form] = Form.useForm();
	let history = useHistory();

	const onSignUp = () => {
    	form.validateFields().then(values => {
			showLoading()
			signUp(values)
		}).catch(info => {
			console.log('Validate Failed:', info);
		});
	}

	useEffect(() => {
		if (token !== null && allowRedirect) {
			history.push(redirect)
		}
		if(showMessage) {
			setTimeout(() => {
				hideAuthMessage();
			}, 3000);
		}
	});
	
	return (
		<>
			<motion.div 
				initial={{ opacity: 0, marginBottom: 0 }} 
				animate={{ 
					opacity: showMessage ? 1 : 0,
					marginBottom: showMessage ? 20 : 0 
				}}> 
				<Alert type="error" showIcon message={message}></Alert>
			</motion.div>
			<Form form={form} layout="vertical" name="register-form" onFinish={onSignUp}>
				<Form.Item 
					name="email" 
					label="Email" 
					rules={rules.email}
					hasFeedback
				>
					<Input prefix={<MailOutlined className="text-primary" />}/>
				</Form.Item>
				<Form.Item 
					name="password" 
					label="Password" 
					rules={rules.password}
					hasFeedback
				>
					<Input.Password prefix={<LockOutlined className="text-primary" />}/>
				</Form.Item>
				<Form.Item 
					name="confirm" 
					label="ConfirmPassword" 
					rules={rules.confirm}
					hasFeedback
				>
					<Input.Password prefix={<LockOutlined className="text-primary" />}/>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" block loading={loading}>
						Sign Up
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}

const mapStateToProps = ({auth}) => {
	const { loading, message, showMessage, token, redirect } = auth;
  return { loading, message, showMessage, token, redirect }
}

const mapDispatchToProps = {
	signUp,
	showAuthMessage,
	hideAuthMessage,
	showLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
