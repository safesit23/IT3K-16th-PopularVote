import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
	border-radius: 4px;
	width: 20%;
	@media (max-width:320px) {
		width: ${props => props.widthPic};
    }
	@media (max-width:500px) {
		width: 60%;
    }
	@media (max-width:768px) {
		width: 55%;
    }
`

const Picture = (props) => (
    <Image positon={props.pic} src={`/static/img/IMG_00${props.pic}`} />
)

export default Picture