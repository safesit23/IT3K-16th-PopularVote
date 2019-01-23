import React from 'react'
import ENV from '../config/envConfig'
import socketIOClient from 'socket.io-client'
import WaitingPage from '../components/WaitingProjector'
class Waiting extends React.Component {

	render() {
		return (
			<WaitingPage />
		);
	}
}

export default Waiting;