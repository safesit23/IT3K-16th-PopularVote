import React from 'react'
import Waiting from '../components/Waiting'
import Nav from "./../components/Core/Nav";

class WaitingPage extends React.Component {
	render() {
		return (
			<div>
				<Nav/>
				<Waiting />
			</div>
		);
	}
}

export default WaitingPage;