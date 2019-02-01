import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import socketIOClient from "socket.io-client";
import Router from "next/router";
import ENV from "../../config/envConfig";
import BgColor from "../../config/colors";
import { HeadlineWh } from "../Core/Text";
import Footer from '../Core/Footer'

const Bg = styled.div`
  background: ${BgColor.backgroundnew};
  height: 90vh;
  padding-top: 50%;
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
      if (path != '') {
        this.setState({
          path: path
        });
        Router.push({
          pathname: `${ENV.PATH_BASIC}/${path}`,
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
      <React.Fragment>
        <Bg>
          <Container fluid > 
            <Container  >
              <Row >
                <Col>
                  <HeadlineWh className="text-center mt-5" >
                    {this.state.count != 0 ? "โปรดรอสักครู่..." : this.state.count}
                  </HeadlineWh>
                </Col>
              </Row>
            </Container>
          </Container>
        </Bg>
        <Footer mtop="-76%" />
      </React.Fragment>
    );
  }
}

export default Waiting;
