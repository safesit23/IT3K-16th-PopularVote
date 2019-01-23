import React from "react";
import styled from "styled-components";
import HowTo from "../components/HowTo";
import BgColor from "../config/colors";

const Bg = styled.div`
  background-image: ${BgColor.background};
  height: 100vh;
`;

class Howto extends React.Component {
  render() {
    return (
      <Bg>
        <HowTo />
      </Bg>
    );
  }
}

export default Howto;
