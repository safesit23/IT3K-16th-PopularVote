import React, { Component } from "react";
import Slider from "react-slick";
import { Button, Container, Row } from 'reactstrap'


export default class DynamicSlides extends Component {
  state = {
    slides: [1, 2, 3, 4, 5, 6]
  }

  click() {
    const { slides } = this.state;
    this.setState({
      slides:
        slides.length === 6 ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3, 4, 5, 6]
    });
  }
  render() {
    const settings = {
      dots: true,
      center: true,
      infinite: true,
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
                <div className="d-flex justify-content-center" key={slide}>
                  <img src={`/static/img/${slide}.png`} />
                </div>
              );
            })}
          </Slider>
          
      </Container>
    );
  }
}