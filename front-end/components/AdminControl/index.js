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
	}

	componentDidMount() {
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


	getPath = (e) => {
		e.preventDefault()
		console.log('Tetse.value : ', this.state.value)
		this.changePath(this.state.value)
		this.changePathProjector(this.state.value2)
	}

	onChange = (e) => {
		console.log('radio checked', e.target.value);
		this.setState({
			value: e.target.value,
		});
		let value = this.state.value
		this.changePath(value)
	}

	onChange2 = (e) => {
		console.log('radio2 checked', e.target.value);
		this.setState({
			value2: e.target.value,
		});
		let value2 = this.state.value2
		this.changePathProjector(value2)
	}

	render() {

		return (
			<Container fluid>
				<Row className="pt-4 pl-4">
					{/* <RadioGroup options={pathname} onChange={this.onChange1} value={this.state.value1} /> */}
					{/* <RadioGroup options={options} onChange={this.onChange2} value={this.state.value2} /> */}
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
							{/* <Radio value={pathname[1]}>Count Projector</Radio>
								<Radio value={pathname[2]}>Play Projector</Radio>
								<Radio value={pathname[3]}>Topic Projector</Radio>
								<Radio value={pathname[4]}>Result</Radio>
								<Radio value={pathname[5]}>Waiting projector</Radio> */}
							{/* </RadioGroup> */}
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