import React from 'react'
import styled from 'styled-components'
import Topic from '../components/TopicProjector'
import BgColor from '../config/colors'

const Bg = styled.div`
  background-color: ${BgColor.background};
  height: 100vh;
`
class TopicProjector extends React.Component {
  render() {
    return (
      <Topic />
    )
  }
}

export default TopicProjector