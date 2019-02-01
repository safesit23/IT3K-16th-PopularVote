import React from "react"
import styled from "styled-components"

const Img = styled.img`
  width : 100%;
  z-index : -1;
  left: 0;
  bottom: 0;
  position: fixed;
`

const Footer = () => (
  <Img src='/static/img/footer.png'  />
)

export default Footer