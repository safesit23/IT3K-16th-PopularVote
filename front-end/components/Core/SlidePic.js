import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Row,Col } from 'reactstrap'
import styled from 'styled-components'
import Pic from '../Core/Picture';
import Popup from '../Select/PopupConfirm'


const Button = styled.button`
  background-color : transparent;
  border: 0;
`
class DynamicSlides extends Component {
  state = {
    slides: [1, 2, 3, 4, 5, 6],
  }

  componentDidMount() {
  }


  render() {
    const settings = {
      dots: true,
      center: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 500,
    };
    return (
      <Container fluid>
        <Slider className="mt-3" {...settings} >
          {this.state.slides.map((slide,i) => {
            return (
              <Container fluid  key={i}>
                <Row >
                  <Col className="d-flex justify-content-center"  >
                    <Button>
                      <Pic pic={`${slide}.jpg`} widthPic='100%' />
                    </Button>
                  </Col>
                </Row>
              </Container>
            );
          })}
        </Slider>
      </Container>
    );
  }
}
export default DynamicSlides