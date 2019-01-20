import React from 'react'
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap'
import socketIOClient from 'socket.io-client'
import { Radio } from 'antd';

const RadioGroup = Radio.Group;


const socket = socketIOClient('http://localhost:9000')

const pathname = ['playvoting','countprojector','playprojector','topicprojector']
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
				changePath : 
				<RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio value={1}>Play Vote</Radio>
        <Radio value={2}>Count Projector</Radio>
        <Radio value={3}>Play Projector</Radio>
        <Radio value={4}>Topic Projector</Radio>
      </RadioGroup>
				<button onClick={() => this.getPath()}>waiting Test</button>
      </Container>
		)
	}
}

export default AdminControl;