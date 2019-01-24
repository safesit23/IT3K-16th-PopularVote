import React from "react";
import { Container, Row, Col } from "reactstrap";
import Logo from "../Core/logohead";
import { Subtitle, ParagraphsmBold, Paragraphsm } from "../Core/Text";
import Pic from "../Core/Picture";

class HowToUse extends React.Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Container>
            <Row>
              <Col className="text-center">
                <Logo />
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center mt-2">
                <Subtitle className="text-white">ระบบโหวต ดาว-เดือน</Subtitle>
              </Col>
            </Row>
          </Container>

          <Subtitle>รูป scoll ขวา สูง 80px</Subtitle>
          <Container>
            <Row>
              <Col>
                <ParagraphsmBold>
                  คำแนะนำการใช้งานระบบโหวตดาวเดือน
                </ParagraphsmBold>
              </Col>
            </Row>
            <Row>
              <Col classname="col-10">
                <Paragraphsm>
                  1. เข้าสู่ระบบด้วย Facebook <br/>
                  2. เลือกผู้เข้าแข่งขันที่ต้องการโหวต<br/>
                  โดยเลือกได้เพียงคนเดียวเท่านั้น <br/>
                  3. กดยืนยันและรอการเล่น <br/>
                  4. กดปุ่มย้ำๆ เพื่อให้ส่งกำลังใจให้
                </Paragraphsm>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
}

export default HowToUse;
