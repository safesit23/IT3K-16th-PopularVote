import React from 'react'
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap'
import { Progress, Button } from 'antd';
import ENV from '../../config/envConfig'
import socketIOClient from 'socket.io-client'
import Router from 'next/router'

const socket = socketIOClient(ENV.PATH_SOCKET)


let intervalTime;
class Play extends React.Component {

	state = {
		percent: 10,
		count : 15
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
			this.setState({ count : this.state.count - 1 });
			this.stopTimer(this.state.count)
		}, 1000)
	}

	stopTimer(count) {
		if(count === 0){
			clearInterval(intervalTime);
			Router.push({
				pathname: `${ENV.PATH_BASIC}/timeoutprojector`
			})
			this.changePathToResult()
		}
	}

	changePathToResult = async()=> {
		await socket.emit('changePath','result')
	}
	render() {
		return (
			<Container fluid>
				<Container>
					<h1>{this.state.count}</h1>
				</Container>
			</Container>
		)
	}
}

export default Play;