import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import socketIOClient from "socket.io-client";
import Router from "next/router";
import ENV from "../../config/envConfig";
import BgColor from "../../config/colors";
import Pic from "../Core/Picture";
import { Headline, HeadlineWh, WebWh } from "../Core/Text";
import FooterTest from "../Core/Footer";

const Bg = styled.div`
  background: ${BgColor.backgroundnew};
  height: 100vh;
  padding-top: 90px;
`;

const socket = socketIOClient(ENV.PATH_SOCKET);

class Waiting extends React.Component {
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
          <Row className="d-flex justify-content-center pb-5">
            <Headline color="white">เลือกผู้ที่ต้องการโหวต</Headline>
          </Row>
          <Row>
            {this.state.positions.map(data => {
              return (
                <Col className="p-1">
                  <Pic pic={data} key={data} widthPic="100%" />
                  <HeadlineWh className="text-center pt-3">name</HeadlineWh>
                </Col>
              );
            })}
          </Row>
          <Row className="d-flex justify-content-center pt-5">
            <WebWh color="white">vote.it3k.in.th</WebWh>
          </Row>
        </Container>
		<FooterTest mtop='-67%'/>
      </Bg>
    );
  }
}

export default Waiting;
