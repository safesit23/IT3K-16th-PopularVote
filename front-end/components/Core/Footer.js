import React from 'react'
import styled from 'styled-components'
import Bg from '../../config/colors'

const Img = styled.img`
  width : 100%;
  z-index : -100;
  margin-top: ${props => props.mt || '-50%'};
  
`

const BgColor = styled.div`
background-color : ${Bg.backgroundnew};
`
const Footer = (props) => (
  <BgColor>
    <Img src='/static/img/footer.png' mt={props.mtop}/>
  </BgColor>
)
export default Footer