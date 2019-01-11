import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Logo from '../Core/logo'
import styled from 'styled-components'
import { Button } from 'reactstrap';
// import Button from '../Core/Button'
// import LoginFaceBook from './LoginFaceBook'
import Color from '../../config/fonts'

const PageContainer = styled(Container)`
  background-color: balck;
  height : 1000px;
`

class Login extends React.Component {
  render () {
    return (
      <PageContainer fluid>
      <Container>
        <Row className="mt-5 d-flex justify-content-between align-items-center">
          <Col>
            <Logo />
            {/* <LoginFaceBook /> LoginFaceBook */}
          </Col>
        </Row>
        <Row className="mt-5 d-flex justify-content-between align-items-center">
          <Col>
            <Button color="primary">primary</Button>{'  '}
          </Col>
        </Row>
      </Container>
      </PageContainer>
    )
  }
}

export default Login