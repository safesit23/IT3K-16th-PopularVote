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
		website: {
			A001: [1100, 1111],
			A002: [2200, 2222]
		},
		facebook: {
			A001: [100, 10],
			A002: [200, 20],
		}
	}

	fetchData() {
		alert("FetchData")
	}

	calculateSumWebsite() {
		let sum = [6]
		return sum
	}
	render() {
		return (
			<Row className="pt-4 pl-4">
				<Col xs="12" className="mb-2">
					<Headline>Result</Headline>
				</Col>
				<Section xs="6" className="mb-2">
					<TitlePanel name="Website" buttonName="FETCH" onClick={this.fetchData} />
					<Row>
						<Col xs="4">
							<Subtitle>Round 1</Subtitle>
							<Paragraph color="black">
								{this.state.website.A001[0]}<br />
								{this.state.website.A002[0]}<br />
							</Paragraph>
						</Col>
						<Col xs="4">
							<Subtitle>Round 2</Subtitle>
							<Paragraph color="black">
								{this.state.website.A001[1]}<br />
								{this.state.website.A002[1]}<br />
							</Paragraph>
						</Col>
						<Col xs="4">
							<Subtitle>Total Sum</Subtitle>

						</Col>
					</Row>
				</Section>

				<Section xs="5" className="mb-2">
					<TitlePanel name="Facebook IT3K" buttonName="Update" />
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
					<TitlePanel name="PopularVote" buttonName="Calculate" />

				</Section>
			</Row>
		);
	}
}

export default Result