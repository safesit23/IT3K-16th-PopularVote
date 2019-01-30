import React from "react";
import SelectSlick from "../components/Select";
import Nav from "../components/Core/Nav";
import ENV from '../config/envConfig'
import socketIOClient from 'socket.io-client'

const socket = socketIOClient(ENV.PATH_SOCKET);

class Select extends React.Component {

  componentDidMount () {
    this.countSelect()
  }

  countSelect = async () => {
    let countSelect = 1 
    await socket.emit('countSelect',countSelect)
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <SelectSlick />
      </React.Fragment>
    );
  }
}

export default Select;
