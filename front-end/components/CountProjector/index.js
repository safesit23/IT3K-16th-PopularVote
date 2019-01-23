import React from 'react'
import styled from 'styled-components';
import Router from 'next/router'
import { Container, Row, Col } from 'reactstrap'
import ENV from '../../config/envConfig'



let intervalTime;
class Count extends React.Component {
	state = {
		count: 3,
	}

	startTime = () => {
		console.log('tets count in if')
		intervalTime = setInterval(() => {
			this.setState({
				count: this.state.count - 1
			})
			this.stopTimer(this.state.count)
		}, 1000)
	}

	stopTimer(time) {
		if (time === 0) {
			clearInterval(intervalTime)
			Router.push({
				pathname: `${ENV.PATH_BASIC}/playprojector`,
			})
		}
	}

	componentDidMount() {
		this.startTime()
	}

	render() {
		return (
			<Container fluid>
				<h1> count : {this.state.count}</h1>
			</Container>
		)
	}
}

export default Count;