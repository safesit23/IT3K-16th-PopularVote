import React from 'react'
import Vote from './Vote'
import styled from "styled-components";
import BgColor from "../../config/colors";

const Bg = styled.div`
  background: ${BgColor.backgroundnew};
  height: 92vh;
`;

class PopularVote extends React.Component {

  render() {
    return (
      <Bg>
     <Vote/>
      </Bg>
    )
  }
}

export default PopularVote