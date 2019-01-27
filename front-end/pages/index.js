import React from "react";
import Login from "./../components/Login";
import styled from "styled-components";
import BgColor from "../config/colors";
import Nav from "../components/Core/Nav";
import { Container, Row, Col } from "reactstrap";
import Logo from "../components/Core/logohead";
import { TitleWh } from "../components/Core/Text";

const Bg = styled(Col)`
  background: ${BgColor.backgroundnew};
  height: 100vh;
`;
class componentName extends React.Component {
  render() {
    return (
      <Container fluid >
          <Nav />
        <Row>
          <Bg>
            <Col className="text-center">
              <Logo />
            </Col>
            <TitleWh className="text-center">ระบบโหวต ดาว - เดือน</TitleWh>
            <Login />
          </Bg>
        </Row>
      </Container>
    );
  }
}

export default componentName;
