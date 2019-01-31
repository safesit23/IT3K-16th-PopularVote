import React from 'react'
import BgColor from '../../config/colors'
import styled from 'styled-components';
import Topic from './Topic'
import socketIOClient from 'socket.io-client'
import ENV from '../../config/envConfig'
import Router from 'next/router'
import FooterTest from '../Core/Footer'

const Bg = styled.div`
  background: ${BgColor.backgroundnew};
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
				<FooterTest mtop='-67%'/>
			</Bg>
		)
	}
}

export default TopicProjector;