import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import Logo from '../Core/logo'
import { IT3K } from '../Core/Text'
import LoginFaceBook from './LoginFaceBook'

class Login extends React.Component {
  render() {
    return (
      <Container>
        <Row >
          <Col className="d-flex justify-content-center">
            <Logo />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <IT3K>IT3KINGS#16</IT3K>
          </Col>
        </Row>
        <Row >
          <Col className="d-flex justify-content-center">
            <LoginFaceBook />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Login