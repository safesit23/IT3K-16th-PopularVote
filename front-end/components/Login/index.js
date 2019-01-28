import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import LoginFaceBook from "./LoginFaceBook";
import Gallery from "../Core/SlidePic";
import { TitleWh } from "../Core/Text";
import Logo from "../Core/logohead";
import BgColor from "../../config/colors";

const Bg = styled.div`
  background: ${BgColor.backgroundnew};
  height: 92vh;
`;

class Login extends React.Component {
  render() {
    return (
      <Bg className="mb-4">
      <Container fluid>
        <Container>
          <Col className="text-center">
            <Logo />
          </Col>
          <TitleWh className="text-center">ระบบโหวต ดาว - เดือน</TitleWh>
          <Gallery />
          <Row className="d-flex justify-content-center mt-3">
            <LoginFaceBook/>
          </Row>
        </Container>
      </Container>
      </Bg>
    );
  }
}

export default Login;
