import React from "react";
import { Card,Row,Col } from "reactstrap";
import { MNparagraph, MNsubtitle, Paragraphsm } from "../Core/Text";
class CardVote extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <Row>
            <Col className="col-9">
              <MNsubtitle className="m-2">Logo KMUTT</MNsubtitle>
              <Paragraphsm className="m-2">นายจันทร์ ทองดี</Paragraphsm>
              <MNparagraph className="m-2">ชื่อเล่น</MNparagraph>
            </Col>
            <Col className="col-3 text-right">
            photo
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default CardVote;
