import React from 'react'
import { Button, Container, Row } from 'reactstrap'
import Slick from './MoblieSelect'
import styled from 'styled-components'
import BgColor from '../../config/colors'

const Bg = styled.div`
  background-image:${BgColor.background};
  height: 100vh;
`

class Index extends React.Component {
  render() {
    return (
      <Bg>
        <Container>
          <Slick />
        </Container>
      </Bg>
    )
  }
}

export default Index