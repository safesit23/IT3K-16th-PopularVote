import React from "react";
import { Container, Row, Col } from "reactstrap";
import ResultService from "../../service/ResultService";
import styled from "styled-components";
import Logo from "../Core/logohead";
import BgColor from "../../config/colors";
import { TitleWh } from "../Core/Text";
import { ButtonBack } from "../Core/Button";
import Pic from "../Core/Picture";
import Cookie from "../../service/CookieService";
import Router from "next/router";
import Footer from "../Core/Footer";
import Link from 'next/link'

const Bg = styled.div`
  background: ${BgColor.backgroundnew};
  height: 92vh;
`;

class Result extends React.Component {
  state = {
    count: 0,
    picId: 0
  };
  componentDidMount = () => {
    const data = new URLSearchParams(window.location.search);
    this.getResult();
    this.getDataCompetitor(data.get("id"));
  };

  getResult = async () => {
    let data = await ResultService.getResult();
    console.log(data)
    console.log(data.data.count)
    if (Cookie.gettokenJWTCookie()) {
       this.setState({
        count: data.data.count
      });
      console.log("test : ", data);
      this.clearCookie();
    } else {
      Router.replace({
        pathname: "/"
      });
    }
  };

  getDataCompetitor = async id => {
    if (Cookie.gettokenJWTCookie()) {
      this.setState({
        picId: id
      });
    } else {
      Router.replace({
        pathname: "/"
      });
    }
  };

  clearCookie = async () => {
    if (Cookie.gettokenJWTCookie()) {
      Cookie.removeJWTAndEmailCookie();
    }
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
            <Row className="mt-2 tl-4 d-flex justify-content-center">
            <Col className="col-2" />
              <Col>
                <Pic pic={`${this.state.picId}.jpg`} widthPic="70%" />
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center mt-2 mb-2">
                <TitleWh>ขอบคุณที่มาร่วมลงคะแนนเสียงนะครับ 💖 </TitleWh>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center mb-3">
              <Link href="/index">
              <ButtonBack block size="large">
                กลับสู่หน้าหลัก
              </ButtonBack>
              </Link>
            </Row>
          </Container>
        </Container>
        <Footer mtop="-45%" />
      </Bg>
    );
  }
}

export default Result;
