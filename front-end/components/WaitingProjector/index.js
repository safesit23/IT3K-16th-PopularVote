import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import socketIOClient from 'socket.io-client'
import Router from 'next/router'
import ENV from '../../config/envConfig'
import BgColor from '../../config/colors'
import Pic from '../Core/Picture'
import { Headline } from '../Core/Text'

const Bg = styled(Container)`
    background-color : ${BgColor.violet};
    height : 100vh;
`
const socket = socketIOClient(ENV.PATH_SOCKET)

class Waiting extends React.Component {
	state = {
		positions: [1, 2, 3, 4, 5, 6]
	}
	changePath = async () => {
		await socket.on('pathProjector', (path) => {
			Router.push({
				pathname: `${ENV.PATH_BASIC}/${path}`,
			})
			console.log('Cilent Path Project : ', path)
		})
	}

	componentDidMount() {
		this.changePath()
	}

	render() {
		return (
			<Bg fluid>
				<Container>
					<Row className="text-center">
						<Headline  color="white">
							เลือกผู้ที่ต้องการโหวต
						</Headline>
					</Row>
					<Row>
						{
							this.state.positions.map((data) => {
								return (
									<div className="p-1">
										<Pic pic={data} key={data} />
									</div>
								)
							})
						}
					</Row>
					<Row className="text-center">
						<Headline  color="white">
							it3k.in.th
						</Headline>
					</Row>
				</Container>
			</Bg>
		)
	}
}

export default Waiting