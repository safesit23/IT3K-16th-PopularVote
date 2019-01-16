import React from 'react'
import { Button as AntButton, message } from 'antd'
import { Container, Row, Col, Button } from 'reactstrap'
import Logo from '../Core/logo'
import { IT3K, Subtitle } from '../Core/Text'
import LoginFaceBook from './LoginFaceBook'

class Login extends React.Component {
  render() {
    return (
      <Container fluid>
      <Container>
        <Row >
          <Col className="d-flex justify-content-center">
            <Logo />
          </Col>
        </Row>
        <Row>
          <Col xs='12' className="d-flex justify-content-center">
            <IT3K>IT3KINGS#16</IT3K>
          </Col>
          <Col xs='12' className="d-flex justify-content-center">
            <Subtitle>VOTING</Subtitle>
            <Button>ดูผลการแข่งขัน</Button>
          </Col>
        </Row>
        <Row >
          <Col className="d-flex justify-content-center">
            <LoginFaceBook />
          </Col>
          <Col className="d-flex justify-content-center">
            <AntButton type="primary" onClick={() => message.success('Ok!')}>Hi</AntButton>
          </Col>
        </Row>
      </Container>
      </Container>
    )
  }
}

export default Login