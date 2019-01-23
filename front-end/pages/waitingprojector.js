import React from 'react'
import BgColor from '../config/colors'
import styled from 'styled-components';
import ENV from '../config/envConfig'
import socketIOClient from 'socket.io-client'

const Bg = styled.div`
  background-color : ${BgColor.violet};
	height: 100vh;
` 
class WaitingPage extends React.Component {

	render() {
		return (
			<Bg className="d-flex justify-content-center text-white">
				This is WaitingPage
			</Bg>
		);
	}
}

export default WaitingPage;