import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import Logo from "../Core/logohead";
import BgColor from "../../config/colors";
import { SubtitleWh } from "../Core/Text";
import CardVote from "../Core/Card";
import Popup from "./PopupConfirm";
import CompetitorService from "../../service/CompetitorService";
import FooterTest from '../Core/Footer'

const Bg = styled.div`
  background: ${BgColor.backgroundnew};
  height: auto;
`;

const Button = styled.button`
  background-color: transparent;
  border: 0;
`;

let competiotr_data = [];
class Index extends React.Component {
  state = {
    competitor: {},
    showPopup: false,
    name: "",
    id: 0
  };

  async componentDidMount() {
    const data = await CompetitorService.getCompetitor();
    await this.setDataCompetitor(data.data);
  }

  showPopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  togglePopup = async (id, name) => {
    this.setState({
      showPopup: !this.state.showPopup,
      id: id,
      name: name
    });
  };

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
        <Container fluid>
          <Container>
            <Row>
              <Col className="text-center">
                <Logo />
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center mt-2">
                <SubtitleWh>
                  เลือกผู้เข้าแข่งขันที่ต้องการโหวต
                </SubtitleWh>
              </Col>
            </Row>
            <Row>
              <Col>
                {competiotr_data.map((data,i) => {
                  return (
                    <Button key={i}
                      onClick={() => this.togglePopup(data.id, data.name)}
                    >
                      <CardVote 
                        name={data.name}
                        nickname={data.nickname}
                        university={data.university}
                        id={`${data.id}${data.id}.png`}
                      />
                    </Button>
                  );
                })}
              </Col>
            </Row>
            {this.state.showPopup ? (
              <Popup
                text="Close Me"
                id={this.state.id}
                name={this.state.name}
                closePopup={() => this.togglePopup()}
              />
            ) : null}
          </Container>
        </Container>
        <FooterTest/>
      </Bg>
    );
  }
}

export default Index;
