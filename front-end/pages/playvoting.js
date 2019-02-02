import React from 'react'
import Voting from '../components/PlayVoting'
import Nav from "./../components/Core/Nav";
import ENV from '../config/envConfig'
import socketIOClient from 'socket.io-client'

const socket = socketIOClient(`${ENV.PATH_SOCKET}/playvoting`);

class Vote extends React.Component {
  componentDidMount () {
    this.countPageVote()
  }

  countPageVote = async () => {
    let countPageVote = 1 
    await socket.emit('countPageVote',countPageVote)
  }
  render () {
    return (
      <React.Fragment>
        <Voting />
      </React.Fragment>
    )
  }
}

export default Vote