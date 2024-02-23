import { Card } from 'antd'
import React, { Component } from 'react'
import Prodlist from './prodList'

export class Prodlists extends Component {
	render() {
		return (
			<React.Fragment>
				<Card>
        <Prodlist />
				</Card>
			</React.Fragment>
		)
	}
}

export default Prodlists
