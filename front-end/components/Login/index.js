import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import Logo from '../Core/logo'
<<<<<<< HEAD
import styled from 'styled-components'
import { Button } from 'reactstrap';
// import Button from '../Core/Button'
// import LoginFaceBook from './LoginFaceBook'
import Color from '../../config/fonts'

const PageContainer = styled(Container)`
  background-color: balck;
  height : 1000px;
`
=======
import { IT3K } from '../Core/Text'
import LoginFaceBook from './LoginFaceBook'
>>>>>>> 77b3e4d15fc6e63de494c33c76e95115812ef0ba

class Login extends React.Component {
  render() {
    return (
      <PageContainer fluid>
      <Container>
<<<<<<< HEAD
        <Row className="mt-5 d-flex justify-content-between align-items-center">
          <Col>
=======
        <Row >
          <Col className="d-flex justify-content-center">
>>>>>>> 77b3e4d15fc6e63de494c33c76e95115812ef0ba
            <Logo />
          </Col>
        </Row>
<<<<<<< HEAD
        <Row className="mt-5 d-flex justify-content-between align-items-center">
          <Col>
            <Button color="primary">primary</Button>{'  '}
=======
        <Row>
          <Col className="d-flex justify-content-center">
            <IT3K>IT3KINGS#16</IT3K>
          </Col>
        </Row>
        <Row >
          <Col className="d-flex justify-content-center">
            <LoginFaceBook />
>>>>>>> 77b3e4d15fc6e63de494c33c76e95115812ef0ba
          </Col>
        </Row>
      </Container>
      </PageContainer>
    )
  }
}

export default Login