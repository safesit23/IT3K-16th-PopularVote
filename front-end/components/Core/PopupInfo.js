import React from "react";
import { Row, Col, Button } from "reactstrap";
import styled from "styled-components";
import { TitleBl, Caption, Body, Paragraph } from "../Core/Text";

const Popup = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

const PuopupInner = styled.div`
  position: absolute;
  left: 10%;
  right: 10%;
  top: 25%;
  bottom: 35%;
  margin: auto;
  background: white;
  border: 0;
  box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.3),
    0px 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 2px;
`;

class PopupConfirm extends React.Component {
  render() {
    return (
      <Popup>
        <PuopupInner>
          <Button
            close
            className="align-self-end float-right mr-2"
            onClick={this.props.closePopup}
          />
          <TitleBl className="text-center mt-4">คำแนะนำการใช้งานระบบ</TitleBl>
          <Row className="text-left ml-4 mr-4">
            <Body color="rgba(0, 0, 0, 0.541327)" className="pl-1">
              1. เข้าสู้ระบบด้วย Facebook
            </Body>
          </Row>
          <Row className="text-left ml-4 mr-4">
            <Body color="rgba(0, 0, 0, 0.541327)" className="pl-1">
              {" "}
              2. เลือกผู้เข้าแข่งขันที่ต้องการโหวต
              โดยเลือกได้เพียงคนเดียวเท่านั้น
            </Body>
          </Row>
          <Row className="text-left ml-4 mr-4">
            <Body color="rgba(0, 0, 0, 0.541327)" className="pl-1">
              3. กดยืนยันและรอการเล่น
            </Body>
          </Row>
          <Row className="text-left ml-4 mr-4">
            <Body color="rgba(0, 0, 0, 0.541327)" className="pl-1">
              4. กดปุ่มย้ำๆ เพื่อส่งกำลังใจให้
            </Body>
          </Row>
        </PuopupInner>
      </Popup>
    );
  }
}
export default PopupConfirm;
