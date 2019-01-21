import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { ButtonVote } from '../Core/Button'
import BgColor from '../../config/colors'
import styled from 'styled-components'
import Pic from '../Core/Picture'
import SendResult from '../../service/SendResult'
import Router from 'next/router'
import ENV from '../../config/envConfig'
import socketIOClient from 'socket.io-client'

const socket = socketIOClient(ENV.PATH_SOCKET)

const Landing = styled(Container)`
  background-color:${BgColor.bgColor};
  height: 100vh;
  padding : 50px;
`

class Vote extends React.Component {
  state = {
    count: 0,
    id: 0,
    name: '',
    path: ''
  }

  vote = () => {
    // window.navigator.vibrate(200)
    this.setState({
      count: this.state.count + 1,
    })
  }

  getNameAndId(id, name,count) {
    let countParam = parseInt(count)
    this.setState({
      id: id,
      name: name,
      count : countParam
    })
  }

  changePath = async (count) => {
    console.log(count, '   Test')
    await socket.on('pathNameResult', (path) => {
      console.log('Path : ', path)
      this.setState({
        path: path
      })
      Router.replace({
        pathname: `${ENV.PATH_BASIC}/${this.state.path}`,
        query: { id: `${this.state.id}`, name: `${this.state.name}`, count : `${this.state.count}` }
      })
    })
  }

  componentDidMount() {
    const id = new URLSearchParams(window.location.search)
    this.getNameAndId(id.get('id'), id.get('name'),id.get('count'))
    this.changePath(this.state.count)
  }


  componentWillUnmount() {
    console.log('willUn')
    let id = this.state.id
    let count = this.state.count
    this.sendResult(id, count)
  }

  sendResult = async (id, count) => {
    console.log('Count : ', this.state.count)
    SendResult.sendResult(id, count)
  }

  render() {
    console.log(this.state.count)
    return (
      <Landing fluid>
        <Container>
          <Row>
            <Col className="text-center">
              <h3 count={this.state.count}>คะแนน : {this.state.count}</h3>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center mt-4">
              <Pic pic={this.state.id} />
            </Col>
            <Col className="d-flex justify-content-center mt-4">
              <h5>{this.state.name}</h5>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <ButtonVote onClick={() => this.vote()}>VOTE</ButtonVote>
            </Col>
          </Row>
        </Container>
      </Landing>
    )
  }
}

export default Vote