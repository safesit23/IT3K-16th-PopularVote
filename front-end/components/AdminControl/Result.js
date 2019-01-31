import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col, Table } from 'reactstrap'
import Button from '../Core/Button'
import FacebookModal from './FbScoreModal'
import { Headline, Paragraph,SubCaption, TitleBl } from '../Core/Text'
import AdminService from '../../service/AdminService'
import CompetitorService from '../../service/CompetitorService'

const Section = styled(Col)`
	margin-left : 10px;
	background-color : ${props => props.color || "#F9F9F9"};
	padding : 10px;
`

const TitlePanel = (props) => (
	<Row>
		<Col className="d-flex align-items-center">
			<TitleBl>{props.name}</TitleBl>
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

const PicInCard = styled(Col)`
	background-image: url('/static/img/IMG_00${props => props.img|| "1"}.jpg');
	background-size: cover;
	background-repeat: repeat;
`

class Result extends React.Component {
	state = {
		competitor: {},
		score: [],
		totalFacebook: 0,
		totalWebsite: 0
	}

	async componentDidMount() {
		const dataCompetitor = await CompetitorService.getCompetitor()
		console.log('=>competitor : ', dataCompetitor)
		await this.setDataCompetitor(dataCompetitor.data)
		const dataWebsite = await AdminService.getWebScore()
		console.log('=>Web : ',dataWebsite)
		const dataFacebook = await AdminService.getFBScore()
		console.log('=>FB : ',dataFacebook)
		await this.setDataScore(dataWebsite.data, dataFacebook.data)
		await this.calculateSumWebsite()
		await this.calculateSumFacebook()
	}

	setDataScore = async (dataWebsite, dataFacebook) =>{
		let score_data = []
		for(let index=0;index<dataWebsite.length;index++){
			score_data.push({
				id: dataWebsite[index].idCompetitor,
				round1: dataWebsite[index].round_1,
				round2: dataWebsite[index].round_2,
				sumWebsite: 0,
				like: dataFacebook[index].like,
				share: dataFacebook[index].share,
				sumFb: 0,
				totalScore: 0
			})
		}
		this.setState({
			score: score_data
		})
	}

		setDataCompetitor = async (competitor) => {
			let competitor_data = []
	    for (let index = 0; index < competitor.length; index++) {
	      competitor_data.push({
	        id: competitor[index].idCompetitor,
	        name: competitor[index].name,
	        nickname: competitor[index].nickname,
	        university: competitor[index].university,
	      })
	    }
	    this.setState({
	      competitor: competitor_data
	    })
	  }

	fetchData = async () => {
		const dataWebsite = await AdminService.getWebScore()
		console.log('=>Web : ',dataWebsite)
		const dataFacebook = await AdminService.getFBScore()
		console.log('=>FB : ',dataFacebook)
		await this.setDataScore(dataWebsite.data, dataFacebook.data)
		this.calculateSumFacebook()
		this.calculateSumWebsite()
	}


	//คำนวณผลรวมคะแนน Facebook ของแต่ละคน
	calculateSumFacebook = async () => {
		console.log("Calculate Sum Facebook Func")
		let scoreX = this.state.score
		for (let index = 0; index < this.state.score.length; index++) {
			let sum = (+scoreX[index].like) + (+scoreX[index].share * 3)
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
			let sum = (+scoreX[index].round1) + (+scoreX[index].round2)
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
		let fbP, fbPoint, webP, webPoint
		if(this.state.score[id].sumFb!=0){
			fbP = (30 * this.state.score[id].sumFb) / this.state.totalFacebook;
			fbPoint = fbP.toFixed(2)
		}else{
			fbPoint = 0
		}
		if(this.state.score[id].sumWebsite!=0){
			webP = (70 * this.state.score[id].sumWebsite) / this.state.totalWebsite;
			webPoint = webP.toFixed(2)
		}else{
			webPoint = 0
		}
		const tP = (+fbPoint)+(+webPoint)
		console.log(`tP of ${this.state.competitor[id].nickname} is ${fbPoint} + ${webPoint} =${tP}`)
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
		console.log(`=======Finish========`)
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
									<td>{this.state.competitor[i].nickname}</td>
									<td>{this.state.competitor[i].university}</td>
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
									<td>{this.state.competitor[i].nickname}</td>
									<td>{this.state.competitor[i].university}</td>
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
					<Row className='d-flex justify-content-center'>
					{
							this.state.score.map((data,i) => (
								<Card xs='5' lg='3' className='my-1 mx-2'>
								<Row className='d-flex bd-highlight'>
									<Col xs='6' className='py-2 bd-highlight'>
										<Paragraph>{this.state.competitor[i].nickname}</Paragraph>
										<SubCaption>
											{this.state.competitor[i].name}<br />
											{this.state.competitor[i].university}
										</SubCaption>
									</Col>
									<Col xs='4' className='d-flex justify-content-center align-items-center bd-highlight'>
										<TitleBl>{data.totalScore} %</TitleBl>
									</Col>
									<PicInCard xs='2' img={i+1} />
								</Row>
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