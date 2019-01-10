import React, {Component} from 'react'
import styled from 'styled-components'

const Logo = styled.img`
    width: 345px;
    height: 345px;
`

export default class LogoIT3K extends Component {
    render() {
        return (
            <Logo src="static/img/logoIT3K.svg" alt="Logo IT3K #16"></Logo>
        );
    }
}