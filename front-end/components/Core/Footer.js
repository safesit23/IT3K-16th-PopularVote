import React from 'react'
import styled from 'styled-components'


const Img = styled.img`
  width : 100%;
  z-index : -100;
  margin-top: -50%;
`
const Footer = () => (
  <Img src='/static/img/footer.png' />
)
export default Footer