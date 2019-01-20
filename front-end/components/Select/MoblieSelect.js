import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import Pic from '../Core/Picture';
import Popup from './PopupConfirm'
import { ParagraphBold, Subtitle, Paragraph } from '../Core/Text'

const Name = ['นาย จันทร์ ทองดีกว่า', 'นาย จันทร์ ทองดีกว่าที่สุด', 'นายอังคาร ทองดีกว่าที่สุด', 'นาย พุธ ทองดีกว่าที่สุด', 'name5', '6'];
const school = ['บางมด', 'พระนครเหนือ', 'ลาดกระบัง', 'บางมด', 'พระนครเหนือ', 'ลาดกระบัง'];

const BoxHr = styled.div`
  width: 100%;
  border : rgba(0, 0, 0, 0.3) solid 0px;
  border-radius : 10%;
  height: 20%;
  background-color:rgba(0, 0, 0, 0.3);
  overflow:hidden;
`


const Button = styled.button`
  background-color : transparent;
  border: 0;
`
export default class DynamicSlides extends Component {
  state = {
    slides: [0, 1, 2, 3, 4, 5],
    select: 0,
    showPopup: false,
    position: 0,
    marginBar: '0'
  }

  select = (slide) => {
    this.setState({
      select: slide
    })
  }

  showPopup() {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }

  togglePopup(slide) {
    console.log(slide)
    this.setState({
      showPopup: !this.state.showPopup,
      select: slide
    });
  }


  position(slide) {
    console.log('sild : ', slide, ' marginBar :', this.state.marginBar)
    this.setState({
      marginBar: `${16.6666667 * (slide + 1)}%`,
    })
  }

  componentDidMount() {
    this.position()
    // this.setState({
    //   marginBar: `${16.6666667 * 0}%`,
    //   position: 1
    // })
  }


  render() {
    const settings = {
      dots: false,
      center: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };

    const Hr = styled.div`
    width:16.6666667%;
    border : #DD755B solid 1px;
    height: 1vh;
    background-color : #DD755B;
    margin-left : ${this.state.marginBar};
    `
    return (
      <Container>
        <Row className="d-flex justify-content-center p-4">
          <ParagraphBold className="mt-3 text-center">เลือกผู้<br />
            ที่ต้องการโหวต</ParagraphBold>
        <BoxHr>
          <Hr />
        </BoxHr>
        </Row>
        <Slider className="mt-3" {...settings} >
          {this.state.slides.map((slide) => {
            return (
              <Col onTouchEnd={() => this.position(slide)} >
                <Row className="d-flex justify-content-center" key={slide} >
                  <Button onClick={() => this.togglePopup(slide)} >
                    <Pic pic={slide} />
                  </Button>
                </Row>
                <Row className="d-flex justify-content-center">
                  <Subtitle className="mt-4 h1" name={Name[slide]}>{Name[slide]}</Subtitle>
                </Row>
                <Row className="d-flex justify-content-center">
                  <Paragraph className="mt-2" >{school[slide]}</Paragraph>
                </Row>
              </Col>
            );
          })}
        </Slider>
        {this.state.showPopup ?
          <Popup
            text='Close Me'
            name={Name[this.state.select]}
            id={this.state.select}
            closePopup={() => this.togglePopup()}
          />
          : null
        }
      </Container>
    );
  }
}