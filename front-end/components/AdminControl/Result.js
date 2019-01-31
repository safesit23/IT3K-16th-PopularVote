import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col, Table } from 'reactstrap'
import Button from '../Core/Button'
import FacebookModal from './FbScoreModal'
import { Headline, Title, Subtitle, Paragraph } from '../Core/Text'
import FbScoreService from '../../service/FacebookScoreService'
import WebsiteScoreService from '../../service/WebScoreService'
import CompetitorService from '../../service/CompetitorService'

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

const Card = styled(Col)`
	background: #FFFFFF;
	box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.24);
	border-radius: 9px;
`

class Result extends React.Component {
	state = {
		competitor: {},
		score: [{
			id: 1,
			round1: 1100,
			round2: 1000,
			sumWebsite: 0,
			like: 100,
			share: 10,
			sumFb: 0,
			totalScore: 0
		}, {
			id: 2,
			round1: 2200,
			round2: 2000,
			sumWebsite: 0,
			like: 200,
			share: 20,
			sumFb: 0,
			totalScore: 0
		}],
		totalFacebook: 0,
		totalWebsite: 0
	}

	async componentDidMount() {
		//     const dataCompetitor = await CompetitorService.getCompetitor()
		//     console.log('competiotr : ', dataCompetitor.data)
		// 		await this.setDataCompetitor(dataCompetitor.data)
		// this.getResult()
		await this.calculateSumWebsite()
		await this.calculateSumFacebook()
	}

	setDataScore = async competitor =>{
		
		for(let index=0;index<6;index++){

		}
		this.setState({

		})
	}

	// 	setDataCompetitor = async competiotr => {
	//     for (let index = 0; index < competiotr.length; index++) {
	//       competiotr_data.push({
	//         id: competiotr[index].idCompetitor,
	//         name: competiotr[index].name,
	//         nickname: competiotr[index].nickname,
	//         university: competiotr[index].university,
	//       })
	//     }
	//     this.setState({
	//       competitor: competiotr_data
	//     })
	//   }

	getResult = async () => {
		let dataFacebook = await FbScoreService.getFBScore()
		let dataWebsite = await WebsiteScoreService.getWebScore()
		await this.setState({
			// website: dataWebsite.data
		})
		// console.log('=====', dataWebsite)
	}

	fetchFBData = () => {
		this.calculateSumFacebook()
		alert("Fetch Data from FB")
	}

	fetchWebsiteData = () => {
		this.calculateSumWebsite()
		alert("Fetch Data from Website")
	}

	//คำนวณผลรวมคะแนน Facebook ของแต่ละคน
	calculateSumFacebook = async () => {
		console.log("Calculate Sum Facebook Func")
		let scoreX = this.state.score
		for (let index = 0; index < this.state.score.length; index++) {
			let sum = scoreX[index].like + (scoreX[index].share * 3)
			scoreX[index] = {
				...scoreX[index],
				sumFb: sum
			}
			console.log(`sumFB of ${index + 1} is ${scoreX[index].sumFb}`)
		}
		this.setState({
			score: scoreX
		})
	}

	//คำนวณผลรวมคะแนน website ของแต่ละคน
	calculateSumWebsite = async () => {
		console.log("Calculate Sum Website Func")
		let scoreX = this.state.score
		for (let index = 0; index < this.state.score.length; index++) {
			let sum = scoreX[index].round1 + scoreX[index].round2
			scoreX[index] = {
				...scoreX[index],
				sumWebsite: sum
			}
			console.log(`sumWeb of ${index + 1} is ${scoreX[index].sumWebsite}`)
		}
		this.setState({
			score: scoreX
		})
	}

	//หาผลรวมคะแนนทั้งหมดของ Facebook
	calculateTotalFacebook = () => {
		let total = 0;
		for (let index = 0; index < this.state.score.length; index++) {
			total = total + this.state.score[index].sumFb
		}
		this.setState({
			totalFacebook : total
		})
		console.log("Total FB = " + total)
	}

	//หาผลรวมคะแนนทั้งหมดของ Website
	calculateTotalWebsite = () => {
		let total = 0;
		for (let index = 0; index < this.state.score.length; index++) {
			total = total + this.state.score[index].sumWebsite
		}
		this.setState({
			totalWebsite : total
		})
		console.log("Total WB = " + total)
	}

	//Function หาคะแนนที่ได้ของบุคคล
	calculateTotalPoint = (id) => {
		const fbP = (30 * this.state.score[id].sumFb) / this.state.totalFacebook;
		const fbPoint = fbP.toFixed(2)
		const webP = (70 * this.state.score[id].sumWebsite) / this.state.totalWebsite;
		const webPoint = webP.toFixed(2)
		const tP = (+fbPoint)+(+webPoint)
		console.log(`tP of ${id} is ${fbPoint} + ${webPoint} =${tP}`)
		return tP
	}

	//Function หาคะแนนทั้งหมดของปุ่ม Calculate
	calculateAll = async () =>{
		console.log("Calculate All")
		await this.calculateTotalFacebook()
		await this.calculateTotalWebsite()
		let scoreX = this.state.score
		for (let index = 0; index < this.state.score.length; index++) {
			let totalScore = this.calculateTotalPoint(index)
			scoreX[index] = {
				...scoreX[index],
				totalScore: totalScore
			}
			console.log(`Score of ${index + 1} is ${scoreX[index].totalScore}`)
		}
		this.setState({
			score: scoreX
		})
		console.log(`Finish`)
	}


	render() {
		return (
			<Row className="pt-4 pl-4">
				<Col xs="12" className="mb-2">
					<Headline>Result</Headline>
				</Col>
				<Section xs="6" className="mb-2">
					<TitlePanel name="Website" buttonName="FETCH" onClick={this.fetchWebsiteData} />
					<div className="table-responsive">
					<Table className="table">
						<thead>
							<th>Name</th>
							<th>University</th>
							<th>Round 1</th>
							<th>Round 2</th>
							<th>SUM</th>
						</thead>
						{
							this.state.score.map((data, i) => (
								<tr>
									<td>{i}</td>
									<td>{data.id}</td>
									<td>{data.round1}</td>
									<td>{data.round2}</td>
									<td>{data.sumWebsite}</td>
								</tr>
							))
						}
					</Table>
					</div>
				</Section>

				<Section xs="5" className="mb-2">
					<TitlePanel name="Facebook IT3K" buttonName="FETCH" onClick={this.fetchFBData} />
					<div className="table-responsive">
					<Table className="table">
						<thead>
							<th>Name</th>
							<th>University</th>
							<th>Like</th>
							<th>Share</th>
							<th>SUM</th>
						</thead>
						{
							this.state.score.map((data, i) => (
								<tr>
									<td>{data.id}</td>
									<td>{data.id}</td>
									<td>{data.like}</td>
									<td>{data.share}</td>
									<td>{data.sumFb}</td>
								</tr>
							))
						}
					</Table>
					</div>
					<FacebookModal buttonLabel="EDIT DATA" />
				</Section>
				<Section xs="11" className="mb-2">
					<TitlePanel name="PopularVote" buttonName="Calculate" onClick={this.calculateAll}/>
					<Paragraph >สัดส่วนการให้คะแนน : 30% จาก Facebook และ 70% จาก Website</Paragraph>
					<Button onClick={this.calculateTotalFacebook}>ShowTotalFB</Button>
					<Button onClick={this.calculateTotalWebsite}>ShowTotalWebsite</Button>
					<Row>
					{
							this.state.score.map((data) => (
								<Card xs='3' className='mx-4'>
									{data.id}{' '}{data.totalScore}
								</Card>
							))
						}
					</Row>
				</Section>
			</Row>
		);
	}
}

export default Result