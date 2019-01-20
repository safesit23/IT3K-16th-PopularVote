import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import Button from '../Core/Button'
import {Headline, Title, Subtitle, Paragraph} from '../Core/Text'

const Section = styled(Col)`
	margin-left : 10px;
	background-color : ${props => props.color || "#F9F9F9"};
	padding : 10px;
`

const TitlePanel = (props)=>(
	     <Row>
			<Col className="d-flex align-items-center">
				<Title>{props.name}</Title>
			</Col>
			<Col className="d-flex align-items-center justify-content-end">
				<Button>{props.buttonName}</Button>
			</Col>
		</Row>
)

const Result = ()=>(
    <Row className="pt-4 pl-4">
		<Col xs="12" className="mb-2">
		    <Headline>Result</Headline>
		</Col>

        <Section xs="6" className="mb-2">
		    <TitlePanel name="Web" buttonName="bN"/>

        </Section>

		<Section xs="5" className="mb-2">
            <TitlePanel name="IT3K" buttonName="bN"/>

		</Section>
		<Section xs="11" className="mb-2">
            <TitlePanel name="PopularVote" buttonName="bN"/>

		</Section>
	</Row>
)
export default Result