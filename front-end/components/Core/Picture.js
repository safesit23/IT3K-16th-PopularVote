import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
	width: 100%;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
	border-radius: 4px;
	@media (min-width:320px) {
		width: ${props => props.widthPic};
    }
`

const Picture = (props) => (
    <Image positon={props.pic} widthPic={props.widthPic} src={`/static/img/IMG_00${props.pic}.jpg`} />
)

export default Picture