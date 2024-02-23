import React, { Component } from 'react'

import Simple from './view/view'

import { Card, Col, Row } from 'antd';


export class CheckOut extends Component {
	render() {
		return (
	
			<div className="site-card-wrapper">
			<h3>View Order Details</h3>
		 <Card title="">
				 <Simple />
			</Card> 
		</div>
		)
	}
}

export default CheckOut
