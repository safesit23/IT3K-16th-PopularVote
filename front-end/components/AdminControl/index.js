import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import Button from '../Core/Button'
import socketIOClient from 'socket.io-client'
import { Radio } from 'antd'
import { Headline, Title, Paragraph } from '../Core/Text'
import Result from './Result'
import ENV from '../../config/envConfig'
import Cookie from '../../service/CookieService'
import Router from 'next/router'

const Section = styled(Col)`
	background-color : ${props => props.color || "#F9F9F9"};
	box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.24);
	border-radius: 9px;
`

const RadioGroup = Radio.Group;

const socket = socketIOClient(ENV.PATH_SOCKET)

const pathname = [{ label: 'Play vote', value: 'playvoting' },
{ label: 'Result', value: 'result' }]

const round = [{ label: 'Round 1', value: 1, },
{ label: 'Round 2', value: 2, }]

const options = [
	{ label: 'Topic', value: 'topicprojector' },
	{ label: 'Waiting', value: 'waitingprojector' },
	{ label: 'Count', value: 'countprojector' },
	{ label: 'Vote', value: 'playprojector' },
	{ label: 'Time Out', value: 'timeoutprojector' },
	{ label: 'Result', value: 'resultprojector' },
];

class AdminControl extends React.Component {
	state = {
		pathname: '',
		value: '',
		value2: '',
		round: 0,
		user: 0,
		loginPage : 0,
		selectPage : 0,
		waitPage : 0,
		votePage : 0,
		resultPage : 0,
		score:[]
	}
	
	componentDidMount() {
		if(Cookie.gettokenJWTCookie()){
			this.getCountLogin()
			this.getCountSelect()
			this.getCountWait()
			this.getCountPageVote()
			this.getCountPageResult()
		}else{
			Router.push({
				pathname: '/adminlogin'
			})
		}
	}

	getCountLogin = async() => {
		await socket.on('getCountLogin',(count) => {
			this.setState({
				loginPage : count
			})
		})
	}

	getCountSelect = async() => {
		await socket.on('getCountSelect',(count) => {
			this.setState({
				selectPage : count
			})
		})
	}

	getCountWait = async () => {
		await socket.on('getCountWait',(count) => {
			this.setState({
				waitPage : count
			})
		})
	} 

	getCountPageVote = async () => {
		await socket.on('getCountPageVote',(count) => {
			this.setState({
				votePage : count
			})
		})
	} 

	getCountPageResult = async () => {
		await socket.on('getCountPageResult',(count) => {
			this.setState({
				resultPage : count
			})
		})
	} 


	getPath = (e) => {
		e.preventDefault()
		this.changePath(this.state.value)
		this.changePathProjector(this.state.value2)
	}

	changePath = (pathname) => {
		console.log('Path name : ', pathname)
		if (pathname != '') {
			socket.emit('changePath', pathname)
		}
	}

	changePathProjector = (projectorPath) => {
		console.log('Projector Path : ', projectorPath)
		if (projectorPath != '') {
			socket.emit('projectorPath', projectorPath)
			if(projectorPath === 'resultprojector'){
				socket.emit('scoreResult', this.state.score)
			}
		}
	}

	onChange = (e) => {
		e.preventDefault()
		this.setState({
			value: e.target.value,
		});
	}

	onChange2 = (e) => {
		e.preventDefault()
		this.setState({
			value2: e.target.value,
		});
	}

	getRound = (e) => {
		e.preventDefault()
		this.changeRound(this.state.round)
	}

	changeRound = (round) => {
		if (round != '') {
			socket.emit('getRound', round)
		}
	}

	onChangeRound = (e) => {
		e.preventDefault()
		this.setState({
			round: e.target.value,
		});
	}

	logout() {
		if(Cookie.gettokenJWTCookie()){
			Cookie.removeJWTAndEmailCookie()
			Router.push({
				pathname : '/adminlogin'
			})
		}
	}
	handlesetScore= (scorecome)=>{
		this.setState({
			score: scorecome,
		});
	}

	render() {
		return (
			<Container fluid>
				<Row className="pt-4 pl-4">
					<Col xs="10">
						<Headline>VOTE Control Panel</Headline>
					</Col>
					<Col xs={{ size: 1 }} className="d-flex justify-content-end">
						<Button onClick={this.logout}>LOGOUT</Button>
					</Col>
				</Row>
				<Row className="p-4">
					<Section xs="12" lg="5" className="box mx-2 pt-3 mb-2" color="#F9F9F9">
						<Title>SETTING</Title>
						<form onSubmit={this.getRound}>
							<h5>Round</h5>
							<RadioGroup options={round} onChange={this.onChangeRound} value={this.state.round} />
							<br />
							Round user : {this.state.round}
							<br />
							<input type="submit" value="Change round" />
						</form>
						<hr />
						<form onSubmit={this.getPath} className="pb-2">
							<h5>Path</h5>
							EMERGENCY>> Change Path : {' '}
							<RadioGroup options={pathname} onChange={this.onChange} value={this.state.value} />
							{'     | '}Path user : {this.state.value}
							<br />
							<Paragraph className="mt-3">
							Change Path Projector : <br />
							<RadioGroup options={options} onChange={this.onChange2} value={this.state.value2} />
							<br />
							</Paragraph>
							<Paragraph className="mt-3">
							Path projector : {this.state.value2}
							</Paragraph>
							<input type="submit" value="Change Path" />
						</form>
					</Section>
					<Section xs="6" lg="3" className="box mx-2 pt-3 mb-2" >
						<Title>USER</Title>
						<Paragraph >Login page : {this.state.loginPage} </Paragraph>
						<Paragraph >Select page :  {this.state.selectPage}</Paragraph>
						<Paragraph >Waiting	 page :  {this.state.waitPage}</Paragraph>
						<Paragraph >Vote page :  {this.state.votePage}</Paragraph>
						<Paragraph >Result	 page :  {this.state.resultPage}</Paragraph>
					</Section>
					<Section xs="6" lg="3" className="box mx-2 pt-3 mb-2" >
						<Title className="mb-2">SET</Title>
						Projector เข้า <a href="https://vote.it3k.in.th/topicprojector" target="_blank">vote.it3k.in.th/topicprojector</a>
						<Title className="mt-2">HOW TO USE</Title>
						<Paragraph>
							1. เลือก Round ['1','2'] เพื่อเปิดปุ่ม FB <br />
							2. เลือก Chang Path: Voting<br />
							3. รอ MC พูด<br />
							4. Chang Path: Couting (นับ 321)<br />
							. ถอยหลัง 10 วิ (AUTO)<br />
							. หมดเวลา 10 วิ (AUTO)<br />
							5.1 กด Fetch แล้วกด Calculate 
							5.2 Chang Path: ResultProjector<br />
							6. เลือก Topic Projector<br />
						</Paragraph>
					</Section>
				</Row>
				<Result handlesetScore={this.handlesetScore}/>
			</Container>
		)
	}
}

export default AdminControl;