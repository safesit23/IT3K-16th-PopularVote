import React from 'react'
import styled from 'styled-components';
import { Container, Row, Col} from 'reactstrap'

class Play extends React.Component{
    stopTimer() {
        clearInterval(intervalTime);
    }

    render(){
        return(
            <Container fluid>
                Play Projector Page
            </Container>
        )
    }
}

export default Play;