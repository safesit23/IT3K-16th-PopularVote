import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
	width: 90%;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
	border-radius: 4px;
	@media (min-width:700px) {
		width: 50%;
    }
    @media (min-width:1000px) {
		width: 30%;
    }
    @media (min-width:1200px) {
		width: 20%;
    }
`

const Picture = (props) => (
    <Image positon={props.pic} src={`/static/img/IMG_00${props.pic}`} />
)

export default Picture