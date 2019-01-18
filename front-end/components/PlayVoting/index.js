import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import {ButtonVote} from '../Core/Button'
import BgColor from '../../config/colors'
import styled from 'styled-components'
import Pic from '../Core/Picture'

const Landing = styled(Container)`
  background-color:${BgColor.bgColor};
  height: 100vh;
  padding : 50px;
`

class PopularVote extends React.Component {
  state = {
    count : 0,
    id : 0,
    name : ''
  }

  vote(){
    this.setState({
      count: this.state.count + 1,
    })
  }

  getNameAndId (id,name) {
    this.setState({
      id : id,
      name : name
    })
  }

  componentDidMount () {
    const id = new URLSearchParams(window.location.search)
    this.getNameAndId(id.get('id'),id.get('name'))
    // this.vote()
  }

  render() {
    return (
      <Landing fluid>
        <Container>
          <Row>
            <Col className="text-center">
              <h3>Score : {this.state.count}</h3>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center mt-4">
             <Pic pic={this.state.id}/>
            </Col>
            <Col className="d-flex justify-content-center mt-4">
             <h5>{this.state.name}</h5>
            </Col>
          </Row>
          <Row>
            <Col className=" d-flex justify-content-center mt-4">
              <ButtonVote className="text-center" onClick={() => this.vote()}>VOTE</ButtonVote>
            </Col>
          </Row>
        </Container>
      </Landing>
    )
  }
}

export default PopularVote