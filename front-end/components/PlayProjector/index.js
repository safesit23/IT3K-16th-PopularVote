import React from "react";
import styled from "styled-components";
import { Row, Card } from "reactstrap";
import ENV from "../../config/envConfig";
import { NumberWh, WebWh } from "../Core/Text";
import socketIOClient from "socket.io-client";
import Router from "next/router";
import BgColor from "../../config/colors";
import Footer from "../Core/Footer";

const socket = socketIOClient(ENV.PATH_SOCKET);

const Bg = styled.div`
  height: 100%;
  width : 100%;
  left: 0;
  bottom: 0;
  position: fixed;
  padding-top: 20px;
`;

let intervalTime;
class Play extends React.Component {
  state = {
    percent: 10,
    count: 15
  };

  componentDidMount = () => {
    this.increase();
    this.changePathToVote();
  };

  changePathToVote = async () => {
     socket.emit("changePath", "playvoting");
  };

  increase = () => {
    intervalTime = setInterval(() => {
      this.setState({ count: this.state.count - 1 });
      this.stopTimer(this.state.count);
    }, 1000);
  };

  stopTimer(count) {
    if (count === 0) {
      clearInterval(intervalTime);
      Router.push({
        pathname: `${ENV.PATH_BASIC}/timeoutprojector`
      });
      this.changePathToResult();
    }
  }

  changePathToResult = async () => {
     socket.emit("changePath", "result");
  };
  render() {
    return (
      <Bg>
        <Row className="d-flex justify-content-center mt-4">
          <WebWh>เหลือเวลาอีก</WebWh>
        </Row>
        <Row className="d-flex justify-content-center mb-4">
          <NumberWh>{this.state.count}</NumberWh>
        </Row>
        <Row className="d-flex justify-content-center">
          <Card>
            <WebWh color="#5F597B">กดปุ่ม PRESS เพื่อให้คะแนน</WebWh>
          </Card>
        </Row>
        <Footer />
      </Bg>
    );
  }
}

export default Play;
