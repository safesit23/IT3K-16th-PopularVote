import React, { Component } from "react";
import Slider from "react-slick";
import { Button, Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'

const Name = ['นาย จันทร์ ทองดีกว่า', 'นาย จันทร์ ทองดีกว่าที่สุด', 'นายอังคาร ทองดีกว่าที่สุด', 'นาย พุธ ทองดีกว่าที่สุด', '5', '6'];

const Hr = styled.div`
  width: 80%;
  border : solid 1px;
`

export default class DynamicSlides extends Component {
  state = {
    slides: [1, 2, 3, 4, 5, 6],
  }

  click() {
    const { slides } = this.state;
    this.setState({
      slides:
        slides.length === 6 ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3, 4, 5, 6],
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
          <h2 className="mt-5">Select</h2>
        </Row>
        <Slider className="mt-5" {...settings}>
          {this.state.slides.map(function (slide) {
            return (
              <Col>
              Test : {slide}
                <div className="d-flex justify-content-center" key={slide}>
                  <img src={`/static/img/${slide}.png`} />
                </div>
                <div className="d-flex justify-content-center mt-5">
                  <Hr />
                </div>
                <div className="d-flex justify-content-center">
                  <h2 className="mt-5">{Name[slide]}</h2>
                </div>
              </Col>
            );
          })}
        </Slider>
        {this.state.position}
      </Container>
    );
  }
}