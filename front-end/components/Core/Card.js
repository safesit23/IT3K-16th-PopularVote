import React from "react";
import { Card,Row,Col } from "reactstrap";
import { MNparagraph, MNsubtitle, Paragraphsm } from '../Core/Text';
import Pic from '../Core/Picture'

class CardVote extends React.Component {
  
  render() {
    return (
      <div>
        <Card>
          <Row>
            <Col className="col-9">
              <Paragraphsm className="m-2">{this.props.name}</Paragraphsm>
              <MNparagraph className="m-2">{this.props.nickname}</MNparagraph>
              <MNsubtitle className="m-2">{this.props.university}</MNsubtitle>
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