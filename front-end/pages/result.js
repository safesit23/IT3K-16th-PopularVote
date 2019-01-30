import React, { Component } from 'react'
import Result from '../components/Result'
import Nav from "./../components/Core/Nav";
import ENV from '../config/envConfig'
import socketIOClient from 'socket.io-client'

const socket = socketIOClient(ENV.PATH_SOCKET);

export default class result extends Component {

  componentDidMount () {
    this.countPageResult()
  }

  countPageResult = async () => {
    let countPageResult = 1 
    await socket.emit('countPageResult',countPageResult)
  }

  render() {
    return (
      <React.Fragment>
        <Nav/>
        <Result />
      </React.Fragment>
    )
  }
}
