import React from 'react'
import styled from 'styled-components'
import BgColor from '../config/colors'

const Bg = styled.div`
  background-color:${BgColor.bgColor};
  height: 100vh;
`
class Vote extends React.Component {
  render () {
    return (
      <Bg>Test</Bg>
    )
  }
}

export default Vote