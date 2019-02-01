import React from "react";
import Login from "./../components/Login";
import Nav from "./../components/Core/Nav";
import ENV from '../config/envConfig'
import socketIOClient from 'socket.io-client'
import styled from 'styled-components'
import { Container } from "reactstrap";

const Landing = styled(Container)`
  background: linear-gradient(220deg, #F3BBAB, #C49AAB, #C49AAB);
  background-size: 600% 600%;
  height: 100%;

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

const socket = socketIOClient(ENV.PATH_SOCKET);

class componentName extends React.Component {
  componentDidMount() {
    this.countLogin()
  }

  countLogin = async () => {
    let countLogin = 1
    await socket.emit('countLogin', countLogin)
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <Landing fluid>
          <Login />
        </Landing>
      </React.Fragment>
    );
  }
}

export default componentName;
