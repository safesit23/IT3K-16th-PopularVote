import React from 'react'
import { IT3K, WebWh, HeadlineWh,Title } from '../Core/Text'
import { Container, Row, Col } from 'reactstrap'
import Footer from '../Core/Footer'
import styled, {keyframes} from 'styled-components'

const Blink = keyframes`
  0% {
    opacity: 1;
  }
  
  100% {
    opacity: 0;
    transform: scale(1.2);
    filter: blur(1px);
  }
`

const Landing = styled(Container)`
  height: 100vh;
  width : 100%;
  left: 0;
  bottom: 0;
  position: fixed;
`
const Sponser = styled.img`
  margin : 0px 20px;
  width : auto;
  height : 150px;
  -webkit-filter: drop-shadow(5px 5px 15px rgba(0,0,0,0.24));
`

const Logo = styled.img`
  &.overlay {
    position: absolute; 
    opacity: 0.6s;
    animation: ${Blink} 2s infinite;
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
            <Col className="d-flex justify-content-center mt-5 ">
             <Logo className="mt-2" src="static/img/logoIT3K.svg" alt="Logo IT3K #16"></Logo>
             <Logo className="mt-2 overlay" src="static/img/logoIT3K.svg" alt="Logo IT3K #16"></Logo>
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
          
              <WebWh className="d-flex justify-content-center mt-5">
         

              <Sponser src="static/img/sponsor.png"></Sponser>
        

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