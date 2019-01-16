import React from 'react'
import Logo from '../Core/logo'
import { IT3K, Headline } from '../Core/Text'
import { Container, Row, Col} from 'reactstrap'
import BgColor from '../../config/colors'
import styled from 'styled-components';

const Bgviolet = styled.div`
    background-color : ${BgColor.violet};
    padding : 15px;
    text-align: center;
`

class TopicProjector extends React.Component{
    render(){
        return(
            <Container fluid>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Logo />
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <IT3K>IT 3KINGS #16</IT3K>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ size: 6, offset: 3 }}>
                    <Bgviolet>
                        <Headline color="white" className="justify-content-center">it3k.in.th</Headline>
                    </Bgviolet>
                    </Col>
                </Row>
            </Container>
            </Container>
        )
    }
}

export default TopicProjector;