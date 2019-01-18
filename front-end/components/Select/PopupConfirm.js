import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import Router from 'next/router'

const Popup = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
`
const PuopupInner = styled.div`
  position: absolute;
  left: 10%;
  right: 10%;
  top: 25%;
  bottom: 50%;
  margin: auto;
  background: white;
  border:0;

`

const CloseButton = styled.button`
  margin-right:0;
  right: 0;
  background-color: transparent;
  border:0px;
`

const ConfirmBtn = styled.button`
    background-color: #311847;
    width: 100%;
    border:0px;
    color: #ffffff;
    height: 6vh;
    bottom: 0;
`

class PopupConfirm extends React.Component {

  changePath(){
    Router.push({
      pathname : '/playvoting'
    })
  }

  render() {
    return (
      <Popup>
        <PuopupInner>
          <CloseButton className="align-self-end float-right" onClick={this.props.closePopup}>X</CloseButton>
          <h5 className="d-flex justify-content-center mt-4"> ต้องการเลืกอก </h5>
          <p className=" d-flex justify-content-center">{this.props.name}</p>
          <ConfirmBtn className="mb-0" id={this.props.id} onClick={this.changePath()}>ยืนยัน</ConfirmBtn>
        </PuopupInner>
      </Popup>
    )
  }
}
export default PopupConfirm