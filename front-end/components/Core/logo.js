import React, {Component} from 'react'
import styled from 'styled-components'

const Logo = styled.img`
    width: 100%;
    @media (min-width:320px) {
        width: 90%;
    }
`

export default class LogoIT3K extends Component {
    render() {
        return (
            <Logo className="mt-5" src="static/img/logoIT3K.svg" alt="Logo IT3K #16"></Logo>
        );
    }
}