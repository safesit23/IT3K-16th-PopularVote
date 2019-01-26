import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import Logo from "../Core/logohead";
import BgColor from "../../config/colors";
import { Subtitle } from "../Core/Text";
import CardVote from "../Core/Card"
import CompetitorService from '../../service/CompetitorService'

const Bg = styled.div`
  background-image: ${BgColor.backgroundnew};
  height: auto;
`;

let competiotr_data = [];
class Index extends React.Component {
  state = {
    competitor: {}
  }

  async componentDidMount() {
    const data = await CompetitorService.getCompetitor()
    console.log('competiotr : ', data.data)
    await this.setDataCompetitor(data.data)
    // this.getCompetitor()
  }

  // getCompetitor = async () => {
  // }

  setDataCompetitor = async competiotr => {
    for (let index = 0; index < competiotr.length; index++) {
      competiotr_data.push({
        id: competiotr[index].idCompetitor,
        name: competiotr[index].name,
        nickname: competiotr[index].nickname,
        university: competiotr[index].university,
      })
    }
    console.log('Compo', competiotr_data)
    this.setState({
      competitor: competiotr_data
    })

    console.log(this.state.competitor)
  }

  render() {
    const data = competiotr_data
    return (
      <Bg>
        <Container fluid>
          <Container>
            <Row>
              <Col className="text-center">
                <Logo />
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center mt-2">
                <Subtitle className="text-white">เลือกผู้เข้าแข่งขันที่ต้องการโหวต</Subtitle>
              </Col>
            </Row>
            <Row>
            <Col>
              {competiotr_data.map((data) => {
                return (
                  <CardVote name={data.name} nickname={data.nickname} university={data.university} id={data.id}/>
                )
              })}
            </Col>
            </Row>
          </Container>
        </Container>
      </Bg>
    );
  }
}

export default Index;
