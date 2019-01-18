import React from 'react'
import styled from 'styled-components'


const Img = styled.img`
    /* width: 20px; */
`
const Picture = (props) => (
    <Img src={`/static/img/${props.pic}.png`} />
)
export default Picture