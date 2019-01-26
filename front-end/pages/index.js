import React from 'react'
import Login from './../components/Login'
import styled from 'styled-components'
import BgColor from '../config/colors'
import Nav from '../components/Core/Nav'
import { Container, Row, Col } from 'reactstrap'

const Bg = styled(Col)`
  background:${BgColor.backgroundnew};
  height: 100vh;
`
class componentName extends React.Component {
  render() {
    return (
      <div>
        <Container >
        <Nav />
          <Row>
            <Bg>
              <Login />
            </Bg>
          </Row>
        </Container>
      </div>
    )
  }
}

export default componentName