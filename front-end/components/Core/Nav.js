import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import BgColor from "../../config/colors";
import { BodyWhite } from "../Core/Text";
import { Button as AntButton, message } from "antd";
import Info from "./PopupInfo";

const Bg = styled.nav`
  background: ${BgColor.backgroundNav};
  height: 9vh;
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
      <React.Fragment>
        <Bg>
          <Row className="no-gutters">
            <Col className="text-left mt-3 mb-3 ml-3">
              <BodyWhite>IT 3KINGS #16</BodyWhite>
            </Col>
            <Col className="text-right mt-3 mb-3 mr-3">
              <a onClick={() => this.showPopup()}>
                <img src="static/img/info.png" width="20px" />
              </a>
            </Col>
          </Row>
        </Bg>
        {this.state.showPopup ? (
          <Info text="Close Me" closePopup={() => this.showPopup()} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Nav;
