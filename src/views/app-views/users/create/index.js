import { Card } from 'antd'
import React, { Component } from 'react'
import Usercreate from './userCreate'

export class UserCreates extends Component {
	render() {
		return (
			<React.Fragment>
        <Card>
        <Usercreate />
        </Card>
			</React.Fragment>
		)
	}
}

export default UserCreates
