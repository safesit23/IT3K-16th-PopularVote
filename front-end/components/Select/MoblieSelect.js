import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import Pic from '../Core/Picture';
import Popup from './PopupConfirm'

const Name = ['นาย จันทร์ ทองดีกว่า', 'นาย จันทร์ ทองดีกว่าที่สุด', 'นายอังคาร ทองดีกว่าที่สุด', 'นาย พุธ ทองดีกว่าที่สุด', '5', '6'];

const Hr = styled.div`
  width: 80%;
  border : solid 1px;
`

const Button = styled.button`
  background-color : transparent;
  border: 0;
`
export default class DynamicSlides extends Component {
  state = {
    slides: [1, 2, 3, 4, 5, 6],
    select: 0,
    showPopup : false
  }

  click() {
    const { slides } = this.state;
    this.setState({
      slides:
        slides.length === 6 ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3, 4, 5, 6],
    });
  }

  select = (slide) => {
    this.setState({
      select: slide
    })
  }
  
  showPopup () {
    this.setState({
      showPopup : !this.state.showPopup
    })
  }
  
  togglePopup(slide) {
    console.log(slide)
    this.setState({
      showPopup: !this.state.showPopup,
      select: slide
    });
  }

  render() {
    const settings = {
      dots: false,
      center: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Container>
        <Row className="d-flex justify-content-center">
          <h2 className="mt-3">Select</h2>
        </Row>
        <Slider className="mt-5" {...settings}>
          {this.state.slides.map((slide) => {
            return (
              <Col>
                <div className="d-flex justify-content-center" key={slide} >
                  <Button onClick={() => this.togglePopup(slide)}>
                    <Pic pic={slide} />
                  </Button>
                </div>
                <div className="d-flex justify-content-center mt-5">
                  <Hr />
                </div>
                <div className="d-flex justify-content-center">
                  <h2 className="mt-5" name={Name[slide]}>{Name[slide]}</h2>
                </div>
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