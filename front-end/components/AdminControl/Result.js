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

const Result = ()=>(
    <Row className="pt-4 pl-4">
		<Col xs="12" className="mb-2">
		    <Headline>Result</Headline>
		</Col>
		<Section xs="6" className="mb-2">
	        <Row>
				<Col className="d-flex align-items-center">
					<Title>WEBSITE</Title>
				</Col>
				<Col className="d-flex align-items-center justify-content-end">
					<Button>FETCH</Button>
				</Col>
			</Row>
		</Section>
		<Section xs="5" className="mb-2">
			<Title>IT3K</Title>
		</Section>
		<Section xs="11" className="mb-2">
			<Title>Popular Vote</Title>
		</Section>
	</Row>
)
export default Result