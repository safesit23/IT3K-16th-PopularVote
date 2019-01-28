import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import BgColor from "../../config/colors";
import { BodyWhite } from "../Core/Text";
import { Button as AntButton, message } from "antd";

const Bg = styled.nav`
  background: ${BgColor.backgroundNav};
  height: 9vh;
`;

const InfoTopic = "คำแนะนำการใช้ระบบ";

class Nav extends React.Component {
  render() {
    return (
      <Bg>
        <Row>
          <Col className="text-left mt-3 mb-3 ml-3">
            <BodyWhite>IT 3KINGS #16</BodyWhite>
          </Col>
          <Col className="text-right mt-3 mb-3 mr-3">
            <a
              onClick={() =>
                message.success(
                  <div>
                    <h5>คำแนะนำการใช้ระบบ</h5>
                    <h6 className="text-left">
                      1. เข้าสู้ระบบด้วย Facebook
                      </h6>
                    <h6 className="text-left">
                      2. เลือกผู้เข้าแข่งขันที่ต้องการโหวต
                      <br />
                      โดยเลือกได้เพียงคนเดียวเท่านั้น
                      </h6>
                    <h6 className="text-left">
                      3. กดยืนยันและรอการเล่น
                      </h6>
                    <h6 className="text-left">
                      4. กดปุ่มย้ำๆ เพื่อส่งกำลังใจให้
                      </h6>
                  </div>
                )
              }
            >
              <img src="static/img/info.png" width="20px" />
            </a>
          </Col>
        </Row>
      </Bg>
    );
  }
}

export default Nav;
