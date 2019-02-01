import React from "react";
import styled from "styled-components";
import Logo from "../Core/logohead";
import { Container, Row, Col } from "reactstrap";
import socketIOClient from "socket.io-client";
import Router from "next/router";
import ENV from "../../config/envConfig";
import { HeadlineWh } from "../Core/Text";
import Footer from "../Core/Footer";

const Bg = styled.div`
  height: 100%;
  width: 100%;
  left: 0;
  bottom: 0;
  position: fixed;
  padding-top: 10px;
`;

const BorderWh = styled.div`
  height: 88%;
  width: 93%;
  position: fixed;
  border: 3px solid white;
  margin-top: 40px;
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
      <Bg className="d-flex justify-content-center">
        <BorderWh>
          <Container>
            <Row className="p-4">
              <Col />
              <Col className="text-center">
                <Logo />
              </Col>
              <Col />
            </Row>
            <Row className="d-flex justify-content-center">
              <HeadlineWh color="white">Popular Vote</HeadlineWh>
            </Row>
            <Row>
              <Row>
                <Col md="2" />
                <Col>
                  <Row>
                    {this.state.positions.map(() => {
                      return (
                        <Col className="text-center" md="4">
                          <img
                            src="../../static/img/person_w.png"
                            width="60%"
                            className="m-4"
                          />
                          <HeadlineWh
                            color="#F3BBAB"
                            className="pl-3 pt-2"
                            martop="-80px"
                          >
                            15%
                          </HeadlineWh>
                        </Col>
                      );
                    })}
                  </Row>
                </Col>
                <Col md="2" />
              </Row>
            </Row>
          </Container>
        </BorderWh>
        <Footer />
      </Bg>
    );
  }
}

export default Result;
