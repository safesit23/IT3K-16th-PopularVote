import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { ButtonVote } from '../Core/Button'
import BgColor from '../../config/colors'
import styled from 'styled-components'
import Pic from '../Core/Picture'
import SendResult from '../../service/ResultService'
import Router from 'next/router'
import ENV from '../../config/envConfig'
import socketIOClient from 'socket.io-client'
import { TitleWh } from "../Core/Text";

const socket = socketIOClient(ENV.PATH_SOCKET)

const Landing = styled(Container)`
  background-color:${BgColor.bgColor};
  height: 100vh;
`

class Vote extends React.Component {
  state = {
    count: 0,
    id: 1,
    name: '',
    path: '',
    round: null
  }

  vote = () => {
    // window.navigator.vibrate(200)
    this.setState({
      count: this.state.count + 1,
    })
  }

  getNameAndId(id, name) {
    this.setState({
      id: id,
      name: name,
    })
  }

  changePath = async () => {
    await socket.on('pathName', (path) => {
      console.log('Path : ', path)
      this.setState({
        path: path
      })
    })
  }

  getRound = () => {
    socket.on('round', (newRound) => {
      this.setState({
        round: newRound
      })
    });
  }

  componentDidMount() {
    const id = new URLSearchParams(window.location.search)
    this.getNameAndId(id.get('id'), id.get('name'))
    this.changePath(this.state.count)
    this.getRound()
  }


  componentWillUnmount() {
    let id = this.state.id
    let count = this.state.count
    let round = this.state.round
    this.sendResult(id, count, round)
  }

  sendResult = async (id, count, round) => {
    SendResult.sendResult(id, count, round)
  }

  render() {
    console.log(this.state.count)
    return (
      <Landing fluid>
        <Container>
          <Row>
            <Col className="mt-4 pl-5 pr-5" >
              <Pic pic={this.state.id} />
            </Col>
          </Row>
        </Container>
        <Col className="text-center mt-4">
          <TitleWh count={this.state.count}>คะแนนของคุณคือ {this.state.count} คะแนน</TitleWh>
        </Col>
        <Row>
          <Col className="d-flex justify-content-center">
            <ButtonVote onClick={() => this.vote()}>PRESS</ButtonVote>
          </Col>
        </Row>
      </Landing>
    )
  }
}

export default Vote