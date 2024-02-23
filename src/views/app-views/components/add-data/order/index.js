import React, { Component } from 'react'

import Simple from './view/view'

import { Card, Col, Row } from 'antd';


export class ProdView extends Component {
	render() {
		return (
	
			<div className="site-card-wrapper">
			<h3>View Product</h3>
		 <Card title="">
				 <Simple />
			</Card> 
		</div>
		)
	}
}

export default ProdView
