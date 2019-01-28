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

const pathname = [{ label: 'Play vote', value: 'playvoting' },
{ label: 'Result', value: 'result' }]

const round = [{ label: 'Round 1', value: '1',},
{ label: 'Round 2', value: '2',}  ]

const options = [
	{ label: 'Topic', value: 'topicprojector' },
	{ label: 'Waiting', value: 'waitingprojector' },
	{ label: 'Count', value: 'countprojector' },
	{ label: 'Vote', value: 'playprojector' },
	{ label: 'Time Out', value: 'timeoutprojector' },
];

class AdminControl extends React.Component {
	state = {
		pathname: '',
		value: '',
		value2: '',
		round: '',
		user: 0,
	}

	componentDidMount() {
		this.getCount()
	}

	getCount= () => {
		socket.on('countUser', (user) => {
			this.setState({
				user: user
			})
		})
	}

	getPath = (e) => {
		e.preventDefault()
		this.changePath(this.state.value)
		this.changePathProjector(this.state.value2)
	}

	changePath = (pathname) => {
		console.log('Path name : ', pathname)
		if (pathname != null) {
			socket.emit('changePath', pathname)
		}
	}

	changePathProjector = (projectorPath) => {
		console.log('Projector Path : ', projectorPath)
		if (projectorPath != null) {
			socket.emit('projectorPath', projectorPath)
		}
	}

	onChange = (e) => {
		e.preventDefault()
		this.setState({
			value: e.target.value,
		});
	}

	onChange2 = (e) => {
		e.preventDefault()
		this.setState({
			value2: e.target.value,
		});
	}

	getRound = (e) => {
		e.preventDefault()
		this.changeRound(this.state.round)
	}

	changeRound = (round) => {
		if (round != null) {
			socket.emit('getRound', round)
		}
	}

	onChangeRound = (e) => {
		e.preventDefault()
		this.setState({
			round: e.target.value,
		});
	}

	render() {

		return (
			<Container fluid>
				<Row className="pt-4 pl-4">
					<Col xs="10">
						<Headline>VOTE Control Panel</Headline>
					</Col>
					<Col xs={{ size: 1 }} className="d-flex justify-content-end">
						<Button>LOGOUT</Button>
					</Col>
				</Row>
				<Row className="pl-4">
					<Section xs="6" color="#FFEEE4">
						<Title>SETTING</Title>
						<form onSubmit={this.getPath}>
							Change Path : <br />
							<RadioGroup options={pathname} onChange={this.onChange} value={this.state.value} />
							<br />
							Change Path Projector : <br />
							<RadioGroup options={options} onChange={this.onChange2} value={this.state.value2} />
							<br />
							Path user : {this.state.value}
							<br />
							Path projector : {this.state.value2}
							<br />
							<input type="submit" value="Change Path" />
						</form>
						<form onSubmit={this.getRound}>
							Round : <br />
							<RadioGroup options={round} onChange={this.onChangeRound} value={this.state.round} />
							<br />
							Round user : {this.state.round}
							<br />
							<input type="submit" value="Change round" />
						</form>
					</Section>
					<Section xs="5">
						<Title>USER</Title>
						<Paragraph color="black">Current User : {this.state.user}</Paragraph>
						<Paragraph color="black">User Selecting : 0 </Paragraph>
						<Paragraph color="black">Ready User for vote : 0</Paragraph>
					</Section>
				</Row>
				<Result />
			</Container>
		)
	}
}

export default AdminControl;