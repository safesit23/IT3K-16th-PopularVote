import React from 'react'
import styled from 'styled-components'
import { Row } from 'reactstrap'
import { Timeout } from '../Core/Text'
import Footer from '../Core/Footer'

const Bg = styled.div`
  height: 100%;
  width : 100%;
  left: 0;
  bottom: 0;
  position: fixed;
  padding-top: 270px;
`

class Time extends React.Component {
  render() {
    return (
      <Bg>
        <Row className="d-flex justify-content-center">
          <Timeout color="white" className="font-weight-bold">หมดเวลา!</Timeout>
        </Row>
          <Footer/>
      </Bg>
    )
  }
}

export default Time