import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import BgColor from "../../config/colors";
import { BodyWhite } from "../Core/Text";
import Info from "./PopupInfo";

const Bg = styled.nav`
  background: ${BgColor.backgroundNav};
  height: 9vh;
  position: relative;
`;

class Nav extends React.Component {
  state = {
    showPopup: false
  };
  showPopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <Bg fluid>
        <Container>
          <Row className="no-gutters">
            <Col className="text-left mt-3 mb-3 ml-3">
              <BodyWhite>IT 3KINGS #16</BodyWhite>
            </Col>
              <a onClick={() => this.showPopup()}>
            <Col className="text-right mt-3 mb-3 mr-3">
                <img src="static/img/info.png" width="20px" />
            </Col>
              </a>
          </Row>
        </Container>
        {this.state.showPopup ? (
          <Info text="Close Me" closePopup={() => this.showPopup()} />
        ) : null}
      </Bg>
    );
  }
}

export default Nav;
