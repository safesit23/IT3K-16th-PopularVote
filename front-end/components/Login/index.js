import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Logo from '../Core/logo'
import styled from 'styled-components'
import { Button } from 'reactstrap';
import { Button as AntdButton } from 'antd'
// import Button from '../Core/Button'
// import LoginFaceBook from './LoginFaceBook'
import Color from '../../config/fonts'


class Login extends React.Component {
  render () {
    return (
      <Container>
        <Row className="mt-5 justify-content-center">
          <Col>
            <Logo />
            {/* <LoginFaceBook /> LoginFaceBook */}
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center">
          <Col md="3">
            <Button color="primary">primary</Button>
          </Col>
          <Col md={{size:3,offset:2}}>
           <AntdButton>Default</AntdButton>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Login