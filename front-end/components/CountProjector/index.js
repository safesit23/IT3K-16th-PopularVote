import React from 'react'
import styled from 'styled-components';
import { Container, Row, Col} from 'reactstrap'

class Count extends React.Component{
    stopTimer() {
        clearInterval(intervalTime);
    }

    render(){
        return(
            <Container fluid>
                Timer Page
            </Container>
        )
    }
}

export default Count;