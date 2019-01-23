import React from 'react'
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap'
import { Progress, Button } from 'antd';


let intervalTime;
class Play extends React.Component {

	state = {
		percent: 10,
	}

	componentDidMount() {
		this.increase()
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