import React, { Component } from 'react'
import styled from 'styled-components'

const Logo = styled.img`
    width: 100%;
    @media (min-width:320px) {
        width: 50%;
	}
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export default class LogoIT3K extends Component {
	render() {
		return (
			<Logo className="mt-2" src="static/img/logoIT3K.svg" alt="Logo IT3K #16"></Logo>
		);
	}
}