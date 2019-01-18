import React from 'react'
import styled from 'styled-components'
import {Container, Row, Col} from 'reactstrap'

const BgColor = styled(Container)`
    background-color : rgba(239, 93, 96, 0.35);
    height : 100vh;
    padding-top : 50vh;
`
class Waiting extends React.Component {
    render() {
        return (
            <BgColor fluid>
                <Container>
                 <Row>
                    <h1>Waiting</h1>
                 </Row>
                </Container>
            </BgColor>
        )
    }
}

export default Waiting