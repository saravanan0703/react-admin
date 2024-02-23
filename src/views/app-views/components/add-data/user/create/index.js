import React, { Component } from 'react'
import Simple from './create';
import { Card, Col, Row } from 'antd';


export class UserCreates extends Component {
	render() {
		return (
	
			<div className="site-card-wrapper">
			<h3>Create Users</h3>
		 <Card title="">
				 <Simple />
			</Card> 
		</div>
		)
	}
}

export default UserCreates
