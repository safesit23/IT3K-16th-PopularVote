import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import { TitleBl, Caption, Body, Paragraph, Confirm } from "../Core/Text";
import Router from "next/router";

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
`;

const PuopupInner = styled.div`
  position: absolute;
  left: 10%;
  right: 10%;
  top: 25%;
  bottom: 40%;
  margin: auto;
  background: white;
  border: 0;
  box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.3),
    0px 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 2px;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: 0px;
`;

const ConfirmBtn = styled.button`
  background-color: transparent;
  border: 0px;
  color: #A01A7D;
  :hover {
    color: #ffffff;
    background-color: #311847;
    width: 80%;
    border: 0px;
    height: 4.00vh;
    bottom: 0;
  }
`;

class PopupConfirm extends React.Component {
  state = {
    path: ""
  };

  changePath = async () => {
    await Router.push({
      pathname: "/waiting",
      query: { id: `${this.props.id}`, name: `${this.props.name}` }
    });
  };

  render() {
    console.log(this.state.path, "path name");
    console.log(this.props.id);
    return (
      <Popup>
        <PuopupInner>
          <TitleBl className="text-left mt-4 ml-4"> ยืนยันการโหวต </TitleBl>
          <Paragraph className="text-left ml-4 mr-4">
            {this.props.name}
            <br /> หรือไม่ ?
          </Paragraph>
          <Row className="text-left ml-4 mr-4 mb-4">
            <img src="../../static/img/info.png" width="10px" height="10px" />
            <Caption color="#E2574C" className="pl-1">
              การเลือกครั้งนี้จะไม่สามารถกลับมาแก้ไขได้
            </Caption>
          </Row>
          <Row className=" d-flex justify-content-center">
            <Col />
            <Col>
              <CloseButton
                className="align-self-end float-right"
                onClick={this.props.closePopup}
              >
                <Body color="#A01A7D">ยกเลิก</Body>
              </CloseButton>
            </Col>
            <Col>
              <ConfirmBtn
                className="mb-0"
                id={this.props.id}
                onClick={() => this.changePath()}
              >
                <Confirm>ยืนยัน</Confirm>
              </ConfirmBtn>
            </Col>
          </Row>
        </PuopupInner>
      </Popup>
    );
  }
}
export default PopupConfirm;
