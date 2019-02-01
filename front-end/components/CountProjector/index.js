import React from "react";
import styled from "styled-components";
import Router from "next/router";
import { Row } from "reactstrap";
import { NumberWh } from "../Core/Text";
import Footer from "../Core/Footer";
import ENV from "../../config/envConfig";
import socketIOClient from "socket.io-client";

const socket = socketIOClient(ENV.PATH_SOCKET);

const Bg = styled.div`
  background-color: #C49AAB;
  height: 100vh;
  width : 100%;
  left: 0;
  bottom: 0;
  position: fixed;
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

    
  changePathToVote = async () => {
    await socket.emit("changePath", "playvoting");
  };
  
  componentWillUnmount = () =>{
    this.changePathToVote()
  }

  render() {
    return (
      <Bg className="pt-5">
        <Row className="d-flex justify-content-center align-items-center mt-5">
          <NumberWh>{this.state.count}</NumberWh>
        </Row>
        <Footer />
      </Bg>
    );
  }
}

export default Count;
