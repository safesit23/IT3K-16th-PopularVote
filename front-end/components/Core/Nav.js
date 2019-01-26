import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import BgColor from '../../config/colors'

const Bg = styled.nav`
  background-image:${BgColor.background};
  height: 10vh;
`

class Nav extends React.Component {
  render() {
    return (
      <Bg>
        <Row>
          <Col xs={{ size: 'auto', offset: 11 }} className="pt-3">
            <a onClick={() => message.success('InfoTest')}><img src="static/img/info.png" /></a>
          </Col>
        </Row>
      </Bg>
    )
  }
}

export default Nav