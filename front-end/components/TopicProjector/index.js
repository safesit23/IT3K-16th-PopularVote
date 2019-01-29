import React from 'react'
import { IT3K, Headline } from '../Core/Text'
import { Container, Row, Col } from 'reactstrap'
import BgColor from '../../config/colors'
import styled from 'styled-components';
import Topic from './Topic'
import socketIOClient from 'socket.io-client'
import ENV from '../../config/envConfig'
import Router from 'next/router'

const Bg = styled.div`
  background-color : ${BgColor.violet};
	height: 100vh;
`
const socket = socketIOClient(ENV.PATH_SOCKET)
class TopicProjector extends React.Component {

	changePath = async () => {
		await socket.on('pathProjector', (path) => {
			Router.push({
				pathname: `${ENV.PATH_BASIC}/${path}`,
			})
			console.log('Cilent Path Project : ',path)
		})
	}

	componentDidMount() {
		this.changePath()
	}

	render() {
		return (
			<Bg>
				<Topic />
			</Bg>
		)
	}
}

export default TopicProjector;