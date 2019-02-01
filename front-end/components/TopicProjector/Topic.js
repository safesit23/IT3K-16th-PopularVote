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
  margin : 0px 20px;
  // max-width : 250px;
  // max-height : 100px;
  width : auto;
  height : 50px;
`

const Logo = styled.img`
    width: 100%;
    @media (min-width:320px) {
        width: 25%;
  }
`

const Description = styled.p`
  margin-top : -2%;
`

class TopicProjector extends React.Component {
  render() {
    return (
      <Landing fluid>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center mt-5 animated pulse infinite slow">
             <Logo className="mt-2" src="static/img/logoIT3K.svg" alt="Logo IT3K #16"></Logo>
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
               <Description>
                2 กุมภาพันธ์ 2019 <br /> ณ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
               </Description>
                </HeadlineWh>      
            </Col>
          </Row>
          <Row>
            <Col>
              <WebWh className="d-flex justify-content-center">it3k.in.th</WebWh>
            </Col>
          </Row>
          <Row>
            <Col>
          
              <WebWh className="d-flex justify-content-center mt-5">
         
              <Sponser src="static/img/sponsor1.png"></Sponser>
              <Sponser src="static/img/sponsor2.png"></Sponser>
              <Sponser src="static/img/sponsor3.png"></Sponser>
              <Sponser src="static/img/sponsor4.png"></Sponser>
        

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