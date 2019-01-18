import React from 'react'
import styled from 'styled-components'


const Picture = (props) => (
    <img src={`/static/img/${props.pic}.png`} />
)
export default Picture