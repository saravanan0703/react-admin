import React, { Component } from 'react'
import Simple from '../edituser/edit'
import { Card, Col, Row } from 'antd';


export class EditUser extends Component {
	render() {
		return (
	
			<div className="site-card-wrapper">
			<h3>Edit User</h3>
		 <Card title="">
				 <Simple />
			</Card> 
		</div>
		)
	}
}

export default EditUser
