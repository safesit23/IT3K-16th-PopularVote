import React from 'react'
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
const Sponser = styled.img`
  padding : 5px;
`

const Logo = styled.img`
    width: 100%;
    @media (min-width:320px) {
        width: 25%;
	}
`

class TopicProjector extends React.Component {
  render() {
    return (
      <Landing fluid>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center mt-4">
             <Logo className="mt-2" src="static/img/logoIT3K.svg" alt="Logo IT3K #16"></Logo>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center mt-4">
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
              <WebWh className="d-flex justify-content-center mt-2">vote.it3k.in.th</WebWh>
            </Col>
          </Row>
          <Row>
            <Col>
          
              <WebWh className="d-flex justify-content-center">
         
              <Sponser src="http://via.placeholder.com/300x200"></Sponser>
              <Sponser src="http://via.placeholder.com/300x200"></Sponser>
              <Sponser src="http://via.placeholder.com/300x200"></Sponser>
              <Sponser src="http://via.placeholder.com/300x200"></Sponser>
        

                {/* <img src="http://via.placeholder.com/200x200"></img> */}
                
              </WebWh>
            </Col>
          </Row>

        </Container>
        <Footer />
      </Landing>
    )
  }
}

export default TopicProjector;