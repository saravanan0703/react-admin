import { Card } from 'antd'
import React, { Component } from 'react'
import Translist from './transLists'

export class Prodlists extends Component {
	render() {
		return (
			<React.Fragment>
				<Card>
        <Translist />
				</Card>
			</React.Fragment>
		)
	}
}

export default Prodlists
