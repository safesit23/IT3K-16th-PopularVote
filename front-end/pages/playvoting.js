import React from 'react'
import Voting from '../components/PlayVoting'
import Nav from "./../components/Core/Nav";

class Vote extends React.Component {
  render () {
    return (
      <div>
        <Nav/>
        <Voting />
      </div>
    )
  }
}

export default Vote