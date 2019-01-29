import React from "react";
import { Container, Row, Col } from "reactstrap";
import ResultService from "../../service/ResultService";
import styled from "styled-components";
import Logo from "../Core/logohead";
import BgColor from "../../config/colors";
import { TitleWh } from "../Core/Text";
import { ButtonBack } from '../Core/Button'

const Bg = styled.div`
  background: ${BgColor.backgroundnew};
  height: 92vh;
`;

class Result extends React.Component {
  state = {
    count: 0
  };
  componentDidMount = () => {
    this.getResult();
  };

  getResult = async () => {
    let data = await ResultService.getResult();
    await this.setState({
      count: data.data.count
    });
    console.log('test : ',data)
  };

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
                <TitleWh>ระบบโหวต ดาว - เดือน</TitleWh>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center mt-2">
                <h2>รูปภาพคนที่เลือกโหวต</h2>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center mt-2 mb-2">
                <TitleWh>คะแนนของคุณคือ {this.state.count} คะแนน</TitleWh>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <ButtonBack block size="large">กลับสู่หน้าหลัก</ButtonBack>
            </Row>
          </Container>
        </Container>
      </Bg>
    );
  }
}

export default Result;
