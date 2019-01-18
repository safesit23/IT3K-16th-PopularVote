import React from 'react'
import styled from 'styled-components';
import {Container, Row, Col} from 'reactstrap'

const Landing = styled(Container)`
    background-color : yellow;
`

class Result extends React.Component {

    render() {
        return (
            <Landing fluid>
                <Container>
                    <Row>
                        <Col>
                            <h1>RESULT</h1>
                            <h2>{this.state.count}</h2>
                        </Col>
                    </Row>
                </Container>
            </Landing>
        );
    }
}

export default Result;