import React from "react";
import styled from "styled-components";
import BgColor from "../../config/colors";
import Router from "next/router";
import { Container, Row, Col } from "reactstrap";
import { NumberWh } from "../Core/Text";
import FooterTest from "../Core/Footer";
import ENV from "../../config/envConfig";

const Bg = styled.div`
  background: ${BgColor.backgroundnew};
  height: 100vh;
  padding-top: 130px;
`;

let intervalTime;
class Count extends React.Component {
  state = {
    count: 3
  };

  startTime = () => {
    console.log("tets count in if");
    intervalTime = setInterval(() => {
      this.setState({
        count: this.state.count - 1
      });
      this.stopTimer(this.state.count);
    }, 1000);
  };

  stopTimer(time) {
    if (time === 0) {
      clearInterval(intervalTime);
      Router.push({
        pathname: `${ENV.PATH_BASIC}/playprojector`
      });
    }
  }

  componentDidMount() {
    this.startTime();
  }

  render() {
    return (
      <Bg>
        <Row className="d-flex justify-content-center">
          <NumberWh>{this.state.count}</NumberWh>
        </Row>
        <FooterTest />
      </Bg>
    );
  }
}

export default Count;
