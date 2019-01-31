import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import LoginFaceBook from "./LoginFaceBook";
import Gallery from "../Core/SlidePic";
import { TitleWh } from "../Core/Text";
import Logo from "../Core/logohead";
import BgColor from "../../config/colors";
import ENV from '../../config/envConfig'
import socketIOClient from 'socket.io-client'
import FooterTest from '../Core/Footer'

const socket = socketIOClient(ENV.PATH_SOCKET);

const Bg = styled.div`
  background: ${BgColor.backgroundnew};
  height: 100vh;
`;


class Login extends React.Component {

  componentDidMount() {
    this.countLogin()
  }

  countLogin = async () => {
    let countLogin = 1
    await socket.emit('countLogin', countLogin)
  }

  render() {
    return (
      <Bg>
        <Container fluid>
          <Container>
            <Col className="text-center">
              <Logo />
            </Col>
            <TitleWh className="text-center">ระบบโหวต ดาว - เดือน</TitleWh>
            <Row>
              <Col>
                <Gallery />
              </Col>
            </Row>
            <Row className="d-flex justify-content-center mt-5">
            <Col>
              <LoginFaceBook />
            </Col>
            </Row>
          </Container>
        </Container>
        <FooterTest mtop='-50%' />
      </Bg>
    );
  }
}

export default Login;
