import React from "react";
import styled from "styled-components";
import { Row, Card } from "reactstrap";
import { Progress, Button } from "antd";
import ENV from "../../config/envConfig";
import { NumberWh, WebWh } from "../Core/Text";
import socketIOClient from "socket.io-client";
import Router from "next/router";
import BgColor from "../../config/colors";
import FooterTest from "../Core/Footer";

const socket = socketIOClient(ENV.PATH_SOCKET);

const Bg = styled.div`
  background: ${BgColor.backgroundnew};
  height: 100vh;
  padding-top: 40px;
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
    await socket.emit("changePath", "playvoting");
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
    await socket.emit("changePath", "result");
  };
  render() {
    return (
      <Bg>
        <Row className="d-flex justify-content-center">
          <WebWh>เหลือเวลาอีก</WebWh>
        </Row>
        <Row className="d-flex justify-content-center">
          <NumberWh>{this.state.count}</NumberWh>
        </Row>
        <Row className="d-flex justify-content-center">
          <Card className="p-3">
            <WebWh color="#5F597B">กดปุ่ม PRESS เพื่อให้คะแนน</WebWh>
          </Card>
        </Row>
        <FooterTest mtop='-70%'/>
      </Bg>
    );
  }
}

export default Play;
