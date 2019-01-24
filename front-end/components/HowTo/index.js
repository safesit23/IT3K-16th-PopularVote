import React from "react";
import { Container, Row, Col } from "reactstrap";
import Logo from "../Core/logohead";
import { TitleWh, ParagraphsmBold, Paragraphsm } from "../Core/Text";
import { FacebookButton } from "../Core/Button"

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
                <TitleWh className="text-white">ระบบโหวต ดาว-เดือน</TitleWh>
              </Col>
            </Row>
          </Container>

          <TitleWh>รูป scoll ขวา สูง 80px</TitleWh>
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
            <Row>
                <Col className="text-center mt-5">
                    <FacebookButton size="small" color="primary">Login with Facebook</FacebookButton>
                </Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
}

export default HowToUse;
