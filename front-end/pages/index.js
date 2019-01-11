import React from 'react'
import Login from './../components/Login'
import styled from 'styled-components'

const Bg = styled.div`
  background-color:#E9B6B7;
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