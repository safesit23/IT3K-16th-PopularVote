import React from "react";
import { Card,Row,Col } from "reactstrap";
import { MNparagraph, MNsubtitle, Paragraphsm } from './Core/Text';

class CardVote extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <Row>
            <Col className="col-9">
              <Paragraphsm className="m-2">{props.name}</Paragraphsm>
              <MNparagraph className="m-2">{props.nickName}</MNparagraph>
              <MNsubtitle className="m-2">Logo KMUTT</MNsubtitle>
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