import React from 'react'
import { Button as AntButton, message } from 'antd'
import { Container, Row, Col, Button } from 'reactstrap'
import Logo from '../Core/logo'
import { IT3K, Subtitle } from '../Core/Text'
import LoginFaceBook from './LoginFaceBook'
import Router from 'next/router'

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
            <IT3K>IT3KINGS#16</IT3K>
          </Col>
          <Col xs='12' className="d-flex justify-content-center pb-3">
            <Subtitle>Popular Vote</Subtitle>
          </Col>
        </Row>
        <Row >
          <Col className="d-flex justify-content-center">
            <LoginFaceBook />
          </Col>
        </Row>
      </Container>
      </Container>
    )
  }
}

export default Login