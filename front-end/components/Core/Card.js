import React from "react";
import { Card, Row, Col, Container } from "reactstrap";
import { SubCaption, Caption, Body } from "../Core/Text";
import Pic from "../Core/Picture";

class CardVote extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <Row>
            <Col xs="8" className="text-left mr-0 mt-2">
              <Row>
                <Caption className="ml-4 mt-2">{this.props.university}</Caption>
              </Row>
              <Row>
                <Body className="ml-4 mb-1 mr-0">{this.props.name}</Body>
              </Row>
              <Row>
                <SubCaption className="ml-4 mb-2">
                  {this.props.nickname}
                </SubCaption>
              </Row>
            </Col>
            <Col xs="4">
              <Pic pic={this.props.id} width="100%" />
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default CardVote;
