import React, { Component } from 'react'
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import IndexMd from './markdown/index.md';
import SimpleMd from './markdown/Simple.md';
import HoverMd from './markdown/Hover.md';
import EventMd from './markdown/Event.md';
import Simple from './Add';
import Hover from './Hover';
import Event from './Event';
import { Card, Col, Row } from 'antd';


export class GoogleMap extends Component {
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

export default GoogleMap
