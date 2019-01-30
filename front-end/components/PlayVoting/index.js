import React from 'react'
import Vote from './Vote'
import styled from "styled-components";
import BgColor from "../../config/colors";
import Footer from '../Core/Footer'

const Bg = styled.div`
  background: ${BgColor.backgroundnew};
  height: 100vh;
`;

class PopularVote extends React.Component {

  render() {
    return (
      <Bg>
        <Vote />
        <Footer mtop="-70%"/>
      </Bg>
    )
  }
}

export default PopularVote