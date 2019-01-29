import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import socketIOClient from "socket.io-client";
import Router from "next/router";
import ENV from "../../config/envConfig";
import BgColor from "../../config/colors";
import { HeadlineWh } from "../Core/Text";

const Bg = styled(Container)`
  background: ${BgColor.backgroundnew};
  height: 100vh;
  padding-top: 40vh;
`;
const socket = socketIOClient(ENV.PATH_SOCKET);
class Waiting extends React.Component {
  state = {
    path: "",
    id: 0,
    name: ""
  };
  componentDidMount() {
    const id = new URLSearchParams(window.location.search);
    this.getCountAndId(id.get("id"), id.get("name"));
    this.changePath();
    console.log(id.get("id"), id.get("name"));
  }

  changePath = async () => {
    await socket.on("pathName", path => {
      if (path != "") {
        this.setState({
          path: path
        });
        Router.push({
          pathname: `${ENV.PATH_BASIC}${path}`,
          query: { id: `${this.state.id}`, name: `${this.state.name}` }
        });
      }
      console.log(path);
    });
  };

  getCountAndId(id, name) {
    this.setState({
      id: id,
      name: name
    });
  }

  render() {
    return (
      <Bg>
        <Container>
          <Row>
            <Col />
            <Col className="col-11 text-center">
              <HeadlineWh>
                {this.state.count != 0 ? "โปรดรอสักครู่..." : this.state.count}
              </HeadlineWh>
            </Col>
            <Col />
          </Row>
        </Container>
      </Bg>
    );
  }
}

export default Waiting;
