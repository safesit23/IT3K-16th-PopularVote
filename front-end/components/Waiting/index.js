import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import socketIOClient from 'socket.io-client'
import Router from 'next/router'
import ENV from '../../config/envConfig'

const BgColor = styled(Container)`
    background-color : rgba(239, 93, 96, 0.35);
    height : 100vh;
    padding-top : 50vh;
`
const socket = socketIOClient(ENV.PATH_SOCKET)
class Waiting extends React.Component {
	state = {
		path: '',
		id: 0,
		name : '',
	}
	componentDidMount () {
		const id = new URLSearchParams(window.location.search)
		this.getCountAndId(id.get('id'),id.get('name'))
		this.changePath()
		console.log(id.get('id'),id.get('name'))
	}

	changePath = async () => {
		await socket.on('pathName', (path) => {
			if(path != ''){
				this.setState({
					path: path
				})
				Router.push({
					pathname: `${ENV.PATH_BASIC}/${path}`,
					query: { id: `${this.state.id}`,name : `${this.state.name}`}
				})
			}
			console.log(path)
		})
	}

	getCountAndId (id,name) {
		this.setState({
			id : id,
			name : name
		})
	}

	render() {
		return (
			<BgColor fluid>
				<Container>
					<Row>
						<h1>{this.state.count != 0 ? 'โปรดรอสักครู่':this.state.count}</h1>
					</Row>
				</Container>
			</BgColor>
		)
	}
}

export default Waiting