import React from 'react'
import Logo from '../Core/logo'
import { IT3K, WebWh, HeadlineWh,Title } from '../Core/Text'
import { Container, Row, Col } from 'reactstrap'
import Footer from '../Core/Footer'
import styled from 'styled-components'

const Landing = styled(Container)`
  height: 100vh;
  width : 100%;
  left: 0;
  bottom: 0;
  position: fixed;
`
class TopicProjector extends React.Component {
  render() {
    return (
      <Landing fluid>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center mt-5">
              <Logo />
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center mt-5">
              <WebWh size="40px">IT3K ครั้งที่ 16</WebWh>
            </Col>
          </Row>
          <Row>
            <Col md={{ size: 12}}>
              <HeadlineWh size="28px" className="d-flex justify-content-center text-center">
                2 กุมภาพันธ์ 2019 <br /> ณ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
                </HeadlineWh>
            </Col>
          </Row>
          <Row>
            <Col>
              <WebWh className="d-flex justify-content-center mt-3">vote.it3k.in.th</WebWh>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Landing>
    )
  }
}

export default TopicProjector;