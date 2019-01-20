import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col, Table } from 'reactstrap'
import Button from '../Core/Button'
import { InputNumber } from 'antd';
import { Headline, Title, Subtitle, Paragraph } from '../Core/Text'

const Section = styled(Col)`
	margin-left : 10px;
	background-color : ${props => props.color || "#F9F9F9"};
	padding : 10px;
`

const TitlePanel = (props) => (
	<Row>
		<Col className="d-flex align-items-center">
			<Title>{props.name}</Title>
		</Col>
		<Col className="d-flex align-items-center justify-content-end">
			<Button onClick={props.onClick}>{props.buttonName}</Button>
		</Col>
	</Row>
)

class Result extends React.Component {
	state = {
		A001: 1111,
		A002: 2222
	}
	calculate() {
		alert("Test Calculate")
	}
	render() {
		return (
			<Row className="pt-4 pl-4">
				<Col xs="12" className="mb-2">
					<Headline>Result</Headline>
				</Col>

				<Section xs="6" className="mb-2">
					<TitlePanel name="Website" buttonName="bN" onClick={this.calculate} />
					<Row>
						<Col xs="6">
							<Subtitle>Round 1</Subtitle>
							<Paragraph color="black">
								{this.state.A001}
								{this.state.A002}
							</Paragraph>
						</Col>
						<Col xs="6">
							<Subtitle>Round 2</Subtitle>
						</Col>

					</Row>
				</Section>

				<Section xs="5" className="mb-2">
					<TitlePanel name="Facebook IT3K" buttonName="bN" />
					<Table>
						<thead>
							<th>Name</th>
							<th>University</th>
							<th>Like</th>
							<th>Share</th>
						</thead>
						<tr>
							<td>Name 1</td>
							<td>บางมด</td>
							<td><InputNumber min={0} onChange={this.calculate} /></td>
						</tr>
					</Table>
				</Section>
				<Section xs="11" className="mb-2">
					<TitlePanel name="PopularVote" buttonName="bN" />

				</Section>
			</Row>
		);
	}
}

export default Result