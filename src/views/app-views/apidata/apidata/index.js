import { Card } from 'antd'
import React, { Component } from 'react'
import Apidata from './apiData'

export class UserCreates extends Component {
	render() {
		return (
			<React.Fragment>
        <Card>
        <Apidata />
        </Card>
			</React.Fragment>
		)
	}
}

export default UserCreates
