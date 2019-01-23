import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import { Timeout } from '../Core/Text'
import BgColor from '../../config/colors'

const Bg = styled(Container)`
  background-color : ${BgColor.background};
  height: 100vh;
`

class Time extends React.Component {
  render() {
    return (
      <Bg>
        <Row className="d-flex justify-content-center">
          <Timeout className="font-weight-bold">หมดเวลา</Timeout>
        </Row>
      </Bg>
    )
  }
}

export default Time