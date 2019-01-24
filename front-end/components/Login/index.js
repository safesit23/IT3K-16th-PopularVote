import React from 'react'
import { Button as AntButton, message } from 'antd'
import { Container, Row, Col } from 'reactstrap'
import Logo from '../Core/logo'
import { IT3K,Headline } from '../Core/Text'
import LoginFaceBook from './LoginFaceBook'
import Gallery from './Gallery'
class Login extends React.Component {
  render() {
    return (
      <Container fluid>
      <Container>
        <Row>
          <Col xs={{ size: 'auto', offset: 11 }} className="pt-3">
            <a onClick={() => message.success('InfoTest')}><img src="static/img/info.png" /></a>
          </Col>
        </Row>
        <Row >
          <Col className="d-flex justify-content-center">
            <Logo />
          </Col>
        </Row>
        <Row>
          <Col xs='12' className="d-flex justify-content-center">
            <Headline color="#F3BBAB" className="text-center">Poppular Vote</Headline>
          </Col>
        </Row>
        <Row fluid>
          <Gallery />
        </Row>
        <Row >
          <Col className="d-flex justify-content-center mt-2">
            <LoginFaceBook />
          </Col>
        </Row>
      </Container>
      </Container>
    )
  }
}

export default Login