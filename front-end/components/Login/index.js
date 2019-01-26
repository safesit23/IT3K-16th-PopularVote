import React from 'react'
import { Button as AntButton, message } from 'antd'
import { Container, Row, Col } from 'reactstrap'
import Logo from '../Core/logo'
import { IT3K, Headline } from '../Core/Text'
import LoginFaceBook from './LoginFaceBook'
import Gallery from '../Core/SlidePic'
import Nav from '../Core/Nav'
class Login extends React.Component {
  render() {
    return (
      <Container fluid>
        <Container>
          <Gallery />
          <Row className="d-flex justify-content-center mt-3">
            <LoginFaceBook />
          </Row>
        </Container>
      </Container>
    )
  }
}

export default Login