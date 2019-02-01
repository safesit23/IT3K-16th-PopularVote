import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import LoginFaceBook from "./LoginFaceBook";
import Gallery from "../Core/SlidePic";
import { TitleWh } from "../Core/Text";
import Logo from "../Core/logohead";
import Footer from '../Core/Footer'


const Landing = styled.div`
  height: 100vh;
  width : 100%;
  left: 0;
  bottom: 0;
  position: sticky;
`;


class Login extends React.Component {
  render() {
    return (
        <Landing fluid>
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
          <Footer />
        </Landing>
    );
  }
}

export default Login;
