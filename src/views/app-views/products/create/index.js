import { Card } from 'antd'
import React, { Component } from 'react'
import Prodcreate from './prodCreate'

export class UserCreates extends Component {
	render() {
		return (
			<React.Fragment>
        <Card>
        <Prodcreate />
        </Card>
			</React.Fragment>
		)
	}
}

export default UserCreates
