import React from "react";
import { Card,Row,Col } from "reactstrap";
import { SubCaption, Caption, Body } from '../Core/Text';
import Pic from '../Core/Picture'

class CardVote extends React.Component {
  
  render() {
    return (
      <div>
        <Card>
          <Row>
            <Col className="col-9">
              <Body className="m-2">{this.props.name}</Body>
              <SubCaption className="m-2">{this.props.nickname}</SubCaption>
              <Caption className="m-2">{this.props.university}</Caption>
            </Col>
            <Col className="col-3 text-right">
              <Pic pic={this.props.id} widthPic='20vw'/>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default CardVote;