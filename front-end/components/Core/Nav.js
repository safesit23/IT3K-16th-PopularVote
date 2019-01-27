import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import BgColor from "../../config/colors";
import { BodyWhite } from "../Core/Text";

const Bg = styled.nav`
  background: ${BgColor.backgroundNav};
  height: 9vh;
`;

class Nav extends React.Component {
  render() {
    return (
      <Bg>
       
          <Row>
            <Col className="text-left mt-3 mb-3 ml-3">
              <BodyWhite>IT 3KINGS #16</BodyWhite>
            </Col>
            <Col className="text-right mt-3 mb-3 mr-3">
              <a onClick={() => message.success("InfoTest")}>
                <img src="static/img/info.png" />
              </a>
            </Col>
          </Row>
    
      </Bg>
    );
  }
}

export default Nav;
