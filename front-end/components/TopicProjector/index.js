import React from 'react'
import Logo from '../Core/logo'
import { IT3K, Headline } from '../Core/Text'
import { Container, Row, Col } from 'reactstrap'
import BgColor from '../../config/colors'
import styled from 'styled-components';
import Topic from './Topic'

const Bg = styled.div`
  background-color : ${BgColor.violet};
	height: 100vh;
`

class TopicProjector extends React.Component {
	render() {
		return (
			<Bg>
				<Topic />
			</Bg>
		)
	}
}

export default TopicProjector;