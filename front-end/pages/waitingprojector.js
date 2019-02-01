import React from 'react'
import ENV from '../config/envConfig'
import socketIOClient from 'socket.io-client'
import WaitingPage from '../components/WaitingProjector'
import styled from 'styled-components'

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
class Waiting extends React.Component {

	render() {
		return (
			<Landing>
			<WaitingPage />
			</Landing>
		);
	}
}

export default Waiting;