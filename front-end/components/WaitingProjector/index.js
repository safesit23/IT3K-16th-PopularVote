import React from "react";
import socketIOClient from "socket.io-client";
import Router from "next/router";
import ENV from "../../config/envConfig";
import CompetitorService from "../../service/CompetitorService";
import Waitingpro from "./waitingpro";



const socket = socketIOClient(ENV.PATH_SOCKET);

class index extends React.Component {
  state = {
    positions: [1, 2, 3, 4, 5, 6],
    competitor:[]

  };
  changePath =  () => {
     socket.on("pathProjector", path => {
      Router.push({
        pathname: `${ENV.PATH_BASIC}/${path}`
      });
      console.log("Cilent Path Project : ", path);
    });
  };

  async componentDidMount() {
    this.changePath();
    const data = await CompetitorService.getCompetitorByAdmin();
     this.setDataCompetitor(data.data);
  }

  setDataCompetitor = async competiotr => {
    this.setState({
      competitor: competiotr
    });

  };

  render() {
    return (
      <Waitingpro competion={this.state.competitor}/>
    );
  }
}

export default index;
