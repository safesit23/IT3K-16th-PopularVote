import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import BgColor from '../../config/colors'

const Bg = styled.nav`
  background:${BgColor.backgroundNav};
  height: 10vh;
`

class Nav extends React.Component {
  render() {
    return (
      <Bg className="d-flex justify-content-end">
        <Row >
          <a onClick={() => message.success('InfoTest')}><img src="static/img/info.png" /></a>
        </Row>
      </Bg>
    )
  }
}

export default Nav