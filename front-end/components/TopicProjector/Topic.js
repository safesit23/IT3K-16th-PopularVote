import React from 'react'
import Logo from '../Core/logo'
import { IT3K, Headline, Subtitle } from '../Core/Text'
import { Container, Row, Col } from 'reactstrap'
import BgColor from '../../config/colors'
import styled from 'styled-components';


class TopicProjector extends React.Component {
  render() {
    return (
      <Container fluid>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center mt-5">
              <Logo />
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center mt-5">
              <IT3K>IT 3KINGS #16</IT3K>
            </Col>
          </Row>
          <Row>
            <Col md={{ size: 6, offset: 3 }}>
              <Subtitle color="white" className="d-flex justify-content-center text-center">
                2 กุมภาพันธ์ 2019 <br /> ณ มหาวิทยาลัยพระจอมเกล้าธนบุรี
                </Subtitle>
            </Col>
          </Row>
          <Row>
            <Col md={{ size: 6, offset: 3 }}>
              <Headline color="white" className="d-flex justify-content-center mt-5">it3k.in.th</Headline>
            </Col>
          </Row>
        </Container>
      </Container >
    )
  }
}

export default TopicProjector;