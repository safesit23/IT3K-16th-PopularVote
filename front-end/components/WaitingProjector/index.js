import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import socketIOClient from "socket.io-client";
import Router from "next/router";
import ENV from "../../config/envConfig";
import Pic from "../Core/Picture";
import { Headline} from "../Core/Text";
import FooterTest from "../Core/Footer";
import CompetitorService from "../../service/CompetitorService";

const Bg = styled.div`
  height: 100%;
  width : 100%;
  left: 0;
  bottom: 0;
  position: fixed;
`;

let competiotr_data = [];

const socket = socketIOClient(ENV.PATH_SOCKET);

class Waiting extends React.Component {
  state = {
    positions: [1, 2, 3, 4, 5, 6]
  };
  changePath =  () => {
     socket.on("pathProjector", path => {
      Router.push({
        pathname: `${ENV.PATH_BASIC}/${path}`
      });
      console.log("Cilent Path Project : ", path);
    });
  };

  async componentDidMount() {
    this.changePath();
    const data = await CompetitorService.getCompetitorByAdmin();
    await this.setDataCompetitor(data.data);
  }

  setDataCompetitor = async competiotr => {
    for (let index = 0; index < competiotr.length; index++) {
      competiotr_data.push({
        id: competiotr[index].idCompetitor,
        name: competiotr[index].name,
        nickname: competiotr[index].nickname,
        university: competiotr[index].university
      });
    }
    this.setState({
      competitor: competiotr_data
    });
  };

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
            {competiotr_data.map(data => {
              return (
                <Col className="p-1">
                  <Pic pic={`${data.id}.jpg`} key={data} widthPic="100%" />
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
