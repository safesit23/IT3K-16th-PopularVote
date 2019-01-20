import React from 'react'
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap'

const Landing = styled(Container)`
    background-color : yellow;
`

class Result extends React.Component {
	state = {
		count : 0
	}
	componentDidMount() {
    const id = new URLSearchParams(window.location.search)
    this.getCount(id.get('count'))
	}

	getCount =  (count) => {
		this.setState({
			count : count
		})
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