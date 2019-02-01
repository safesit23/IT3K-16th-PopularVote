import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import Pic from "../Core/Picture";
import { Headline} from "../Core/Text";
import FooterTest from "../Core/Footer";

const Bg = styled.div`
  height: 100%;
  width : 100%;
  left: 0;
  bottom: 0;
  position: fixed;
`;



class Waiting extends React.Component {
 
  render() {
    return (
      <Bg>
        <Container>
          <Row className="d-flex justify-content-center">
            <Headline className="mt-5" color="white">มาโหวตกันเถอะ</Headline>
          </Row>
          <Row className="d-flex justify-content-center pb-3">
            <Headline color="white">vote.it3k.in.th</Headline>
          </Row>
          <Row>
            {this.props.competion.map(data => {
              return (
                <Col className="p-1">
                  <Pic pic={`${data.idCompetitor}.jpg`} key={data} widthPic="100%" />
                </Col>
              );
            })}
          </Row>
        </Container>
		    <FooterTest mtop='-70%'/>
      </Bg>
    );
  }
}

export default Waiting;
