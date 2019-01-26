import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
	width: 10%;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
	border-radius: 4px;
	@media (min-width:320px) {
        width: 70vw;
    }
`

const Picture = (props) => (
    <Image positon={props.pic} src={`/static/img/IMG_00${props.pic}.jpg`} />
)

export default Picture