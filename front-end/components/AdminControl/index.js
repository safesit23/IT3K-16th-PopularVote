import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import Button from '../Core/Button'
import socketIOClient from 'socket.io-client'
import { Radio } from 'antd'
import { Headline, Title, Subtitle, Paragraph } from '../Core/Text'
import Result from './Result'
import ENV from '../../config/envConfig'

const Section = styled(Col)`
	margin-left : 10px;
	background-color : ${props => props.color || "#F9F9F9"};
	padding : 10px;
`

const RadioGroup = Radio.Group;

const socket = socketIOClient(ENV.PATH_SOCKET)

const pathname = ['playvoting', 'countprojector', 'playprojector', 'topicprojector','result','waitingprojector']
class AdminControl extends React.Component {
	state = {
		pathname: '',
		value: 1,
	}

	componentDidMount() {
	}

	changePath = (pathname) => {
		socket.emit('changePath', pathname)
	}

	getPath = (e) => {
		e.preventDefault()
		console.log(this.state.value)
		this.changePath(this.state.value)
	}

	onChange = (e) => {
		console.log('radio checked', e.target.value);
		this.setState({
			value: e.target.value,
		});
	}

	render() {

		return (
			<Container fluid>
				<Row className="pt-4 pl-4">
					<Col xs="10">
						<Headline>VOTE Control Panel</Headline>
					</Col>
					<Col xs={{ size: 2 }} className="d-flex justify-content-end">
						<Button>LOGOUT</Button>
					</Col>
				</Row>
				<Row className="pl-4">
					<Section xs="6" color="#FFEEE4">
						<Title>SETTING</Title>
						changePath :
								<form onSubmit={this.getPath}>
							<RadioGroup onChange={this.onChange} value={this.state.value}>
								<Radio value={pathname[0]}>Play Vote</Radio>
								<Radio value={pathname[1]}>Count Projector</Radio>
								<Radio value={pathname[2]}>Play Projector</Radio>
								<Radio value={pathname[3]}>Topic Projector</Radio>
								<Radio value={pathname[4]}>Result</Radio>
								<Radio value={pathname[5]}>Waiting projector</Radio>
							</RadioGroup>
							<input type="submit" value="hitme" />
						</form>
					</Section>
					<Section xs="5">
						<Title>USER</Title>
						<Paragraph color="black">Current User : </Paragraph>
						<Paragraph color="black">Ready User : </Paragraph>
						<Paragraph color="black">Ended User : </Paragraph>
					</Section>
				</Row>
				<Result />
			</Container>
		)
	}
}

export default AdminControl;