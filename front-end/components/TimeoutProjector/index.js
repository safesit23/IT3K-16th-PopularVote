import React from 'react'
import styled from 'styled-components'
import { Row } from 'reactstrap'
import { Timeout } from '../Core/Text'
import BgColor from '../../config/colors'
import FooterTest from '../Core/Footer'

const Bg = styled.div`
  background: ${BgColor.backgroundnew};
  height: 100vh;
  padding-top: 270px;
`

class Time extends React.Component {
  render() {
    return (
      <Bg>
        <Row className="d-flex justify-content-center">
          <Timeout color="white" className="font-weight-bold">หมดเวลา!</Timeout>
        </Row>
          <FooterTest mtop='-53%'/>
      </Bg>
    )
  }
}

export default Time