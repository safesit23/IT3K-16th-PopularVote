import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import Button from '../Core/Button'
import socketIOClient from 'socket.io-client'
import { Radio } from 'antd'
import {Headline, Title, Subtitle, Paragraph} from '../Core/Text'
import Result from './Result'
import ENV from '../../config/envConfig'

const Section = styled(Col)`
	margin-left : 10px;
	background-color : ${props => props.color || "#F9F9F9"};
	padding : 10px;
`

const RadioGroup = Radio.Group;

const socket = socketIOClient(ENV.PATH_SOCKET)

const pathname = ['playvoting','countprojector','playprojector','topicprojector','result']
class AdminControl extends React.Component {
	state = {
		pathname: '',
		value: 1,
	}

	componentDidMount () {
		this.getPath()
	}

	changePath = (pathname) => {
		socket.emit('changePath',pathname)
	}

	getPath = () => {
		this.setState({
			pathname : pathname[this.state.value-1]
		})
		this.changePath(this.state.pathname)
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
						<Col xs={{size:2}} className="d-flex justify-content-end">
							<Button>LOGOUT</Button>
						</Col>
					</Row>

					<Row className="pl-4">
						<Section xs="6" color="#FFEEE4">
								<Title>SETTING</Title>
								changePath : 
								<RadioGroup onChange={this.onChange} value={this.state.value}>
        				<Radio value={1}>Play Vote</Radio>
        				<Radio value={2}>Count Projector</Radio>
        				<Radio value={3}>Play Projector</Radio>
       					<Radio value={4}>Topic Projector</Radio>
      					</RadioGroup>
								<button onClick={() => this.getPath()}>waiting Test</button>
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