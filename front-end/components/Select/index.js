import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import Logo from "../Core/logohead";
import BgColor from "../../config/colors";
import { Subtitle } from "../Core/Text";
import CardVote from "./CardVote"

const Bg = styled.div`
  background-image: ${BgColor.backgroundnew};
  height: 100vh;
`;

class Index extends React.Component {
  render() {
    return (
        <Bg>
        <Container fluid>
          <Container>
            <Row>
              <Col className="text-center">
                <Logo />
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center mt-2">
                <Subtitle className="text-white">เลือกผู้เข้าแข่งขันที่ต้องการโหวต</Subtitle>
              </Col>
            </Row>
            <Row>
              <Col>
                <CardVote block />
              </Col>
            </Row>
          </Container>
        </Container>
      </Bg>
    );
  }
}

export default Index;
