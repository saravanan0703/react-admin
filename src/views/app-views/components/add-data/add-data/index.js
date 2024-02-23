import React, { Component } from 'react'

import Simple from './create/prodcreate'

import { Card, Col, Row } from 'antd';


export class ProdCreate extends Component {
	render() {
		return (
	
			<div className="site-card-wrapper">
			<h3>Create Product</h3>
		 <Card title="">
				 <Simple />
			</Card> 
		</div>
		)
	}
}

export default ProdCreate
