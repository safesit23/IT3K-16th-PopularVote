import React, { Component } from 'react'
import Result from '../components/Result'
import Nav from "./../components/Core/Nav";

export default class result extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Result />
      </div>
    )
  }
}
