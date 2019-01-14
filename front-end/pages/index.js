import React from 'react'
import Login from './../components/Login'
import styled from 'styled-components'
import BgColor from '../config/colors'

const Bg = styled.div`
  background-color:${BgColor.bgColor};
  height: 100vh;
`
class componentName extends React.Component {
  render () {
    return (
      <Bg>
        <Login />
      </Bg>
    )
  }
}

export default componentName