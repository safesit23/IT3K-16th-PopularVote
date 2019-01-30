import React from 'react'
import Waiting from '../components/Waiting'
import Nav from "./../components/Core/Nav"
import ENV from '../config/envConfig'
import socketIOClient from 'socket.io-client'

const socket = socketIOClient(ENV.PATH_SOCKET);

class WaitingPage extends React.Component {
	componentDidMount () {
    this.countWait()
  }

  countWait = async () => {
    let countWait = 1 
    await socket.emit('countWait',countWait)
	}
	
	render() {
		return (
			<React.Fragment>
				<Nav/>
				<Waiting />
			</React.Fragment>
		);
	}
}

export default WaitingPage;