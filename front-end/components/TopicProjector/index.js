import React from 'react'
import BgColor from '../../config/colors'
import styled from 'styled-components';
import Topic from './Topic'
import socketIOClient from 'socket.io-client'
import ENV from '../../config/envConfig'
import Router from 'next/router'

const Landing = styled.div`
  background: linear-gradient(220deg, #F3BBAB, #C49AAB, #C49AAB);
  background-size: 600% 600%;
  height: 100vh;

-webkit-animation: AnimationName 30s ease infinite;
-moz-animation: AnimationName 30s ease infinite;
animation: AnimationName 3.5s ease infinite;

@-webkit-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
`

const socket = socketIOClient(ENV.PATH_SOCKET)
class TopicProjector extends React.Component {

	changePath =  () => {
		 socket.on('pathProjector', (path) => {
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
			<Landing>
				<Topic />
			</Landing>
		)
	}
}

export default TopicProjector;