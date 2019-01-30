import React from "react";
import { Container, Row, Col } from "reactstrap";
import ResultService from "../../service/ResultService";
import styled from "styled-components";
import Logo from "../Core/logohead";
import BgColor from "../../config/colors";
import { TitleWh } from "../Core/Text";
import { ButtonBack } from '../Core/Button'
import Pic from '../Core/Picture'
import Cookie from '../../service/CookieService'
import Router from 'next/router'

const Bg = styled(Container)`
  background: ${BgColor.backgroundnew};
  height: 100%;
`;


class Result extends React.Component {
  state = {
    count: 0,
    picId: 0
  };
  componentDidMount = () => {
    const data = new URLSearchParams(window.location.search)
    this.getDataCompetitor(data.get('id'))
    this.getResult();
  };

  getResult = async () => {
    let data = await ResultService.getResult();
    if(Cookie.gettokenJWTCookie()){
      await this.setState({
        count: data.data.count
      });
      console.log('test : ', data)
      this.clearCookie()
    }else{
      Router.replace({
        pathname : '/'
      })
    }
  };

  getDataCompetitor = async (id) => {
    if(Cookie.gettokenJWTCookie()){
      this.setState({
        picId: id
      })
    }else{
      Router.replace({
        pathname : '/'
      })
    }
  }

  clearCookie = async () => {
    if(Cookie.gettokenJWTCookie()){
      Cookie.removeJWTAndEmailCookie()
    }
  }

  render() {
    return (
      <Bg fluid>
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
            <Row className="d-flex justify-content-center mt-2" >
              <Col>
                <Pic pic={this.state.picId} widthPic="100%" />
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center mt-2 mb-2">
                <TitleWh>คะแนนของคุณคือ {this.state.count} คะแนน</TitleWh>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center mb-3">
              <ButtonBack block size="large">กลับสู่หน้าหลัก</ButtonBack>
            </Row>
        </Container>
      </Bg>
    );
  }
}

export default Result;
