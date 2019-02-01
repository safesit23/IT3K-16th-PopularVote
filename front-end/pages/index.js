import React from "react";
import Login from "./../components/Login";
import Nav from "./../components/Core/Nav";
import ENV from '../config/envConfig'
import socketIOClient from 'socket.io-client'

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
        <Login />
      </React.Fragment>
    );
  }
}

export default componentName;
