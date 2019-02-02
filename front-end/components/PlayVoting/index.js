import React from 'react'
import Vote from './Vote'
import styled from "styled-components";
import BgColor from "../../config/colors";
import Footer from '../Core/Footer'

const Bg = styled.div`
  background: ${BgColor.backgroundnew};
  height: 100%;
  width : 100%;
  left: 0;
  bottom: 0;
  position: fixed;
  padding-top: 10%;
`;

class PopularVote extends React.Component {

  render() {
    return (
      <Bg>
        <Vote />
        <Footer/>
      </Bg>
    )
  }
}

export default PopularVote