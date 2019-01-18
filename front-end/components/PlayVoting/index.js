import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import {ButtonVote} from '../Core/Button'
import BgColor from '../../config/colors'
import styled from 'styled-components'

const Landing = styled(Container)`
  background-color:${BgColor.bgColor};
  height: 100vh;
  padding : 50px;
`

class PopularVote extends React.Component {
  state = {
    count : 0
  }

  vote(){
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <Landing fluid>
        <Container>
          <Row>
            <Col>
              Score : {this.state.count}
            </Col>
          </Row>
          <Row>
            <Col>
              <ButtonVote onClick={() => this.vote()}>VOTE</ButtonVote>
            </Col>
          </Row>
        </Container>
      </Landing>
    )
  }
}

export default PopularVote