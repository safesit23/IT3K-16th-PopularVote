import React from 'react'
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap'
import ResultService from '../../service/ResultService'

const Landing = styled(Container)`
    background-color : yellow;
`


class Result extends React.Component {
	state = {
		count: 0
	}
	componentDidMount = () => {
		this.getResult()
	}
	getResult = async () => {
		console.log('===========================')
		let data = await ResultService.getResult()
		await this.setState({
			count: data.data.count
		})
		console.log('=====', data.data)
	}

	render() {
		return (
			<Landing fluid>
				<Container>
					<Row>
						<Col>
							<h1>หมดเวลา</h1>
							<h2>Result : {this.state.count}</h2>
						</Col>
					</Row>
				</Container>
			</Landing>
		);
	}
}

export default Result;