import React from "react";
import styled from "styled-components";
import Logo from "../Core/logohead";
import { Container, Row, Col } from "reactstrap";
import socketIOClient from "socket.io-client";
import Router from "next/router";
import ENV from "../../config/envConfig";
import BgColor from "../../config/colors";
import Pic from "../Core/Picture";
import { HeadlineWh } from "../Core/Text";
import FooterTest from "../Core/Footer";

const Bg = styled.div`
  background: ${BgColor.backgroundnew};
  height: 100vh;
  padding-top: 30px;
`;

const socket = socketIOClient(ENV.PATH_SOCKET);

class Result extends React.Component {
  state = {
    positions: [1, 2, 3, 4, 5, 6]
  };
  changePath = async () => {
    await socket.on("pathProjector", path => {
      Router.push({
        pathname: `${ENV.PATH_BASIC}/${path}`
      });
      console.log("Cilent Path Project : ", path);
    });
  };

  componentDidMount() {
    this.changePath();
  }

  render() {
    return (
      <Bg>
        <Container>
          <Row className="d-flex justify-content-center">
            <Logo />
          </Row>
          <Row className="d-flex justify-content-center">
            <HeadlineWh color="white">Popular Vote</HeadlineWh>
          </Row>
          <Row>
            {this.state.positions.map(data => {
              return (
                <Col className="p-1">
                  <Pic pic={data} key={data} widthPic="80%" />
                  <HeadlineWh className="pl-3 pt-2">คะแนน%</HeadlineWh>
                </Col>
              );
            })}
          </Row>
        </Container>
        <FooterTest mtop="-57%" />
      </Bg>
    );
  }
}

export default Result;
