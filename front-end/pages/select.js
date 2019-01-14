import React from 'react'
import styled from 'styled-components'
import BgColor from '../config/colors'
import SelectSlick from '../components/Select'

const Bg = styled.div`
  background-color:${BgColor.bgColor};
  height: 100vh;
`
class Select extends React.Component {
  render () {
    return (
      <Bg>
        <SelectSlick/>
      </Bg>
    )
  }
}

export default Select