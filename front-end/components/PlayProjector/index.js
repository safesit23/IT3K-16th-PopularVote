import React from 'react'
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap'
import { Progress, Button } from 'antd';
import ENV from '../../config/envConfig'
import socketIOClient from 'socket.io-client'

const socket = socketIOClient(ENV.PATH_SOCKET)


let intervalTime;
class Play extends React.Component {

	state = {
		percent: 10,
	}

	componentDidMount = () => {
		this.increase()
		this.changePathToVote()
	}

	changePathToVote = async () => {
		await socket.emit('changePath','playvoting')
	}

	increase = () => {
		intervalTime = setInterval(() => {
			this.setState({ percent : this.state.percent - 1 });
		}, 1000)
	}

	stopTimer() {
		clearInterval(intervalTime);
	}

	render() {
		return (
			<Container fluid>
				<Container>
					<Progress type="circle" />
				</Container>
			</Container>
		)
	}
}

export default Play;