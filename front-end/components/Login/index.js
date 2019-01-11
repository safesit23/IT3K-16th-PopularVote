import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Logo from '../Core/logo'
import styled from 'styled-components'
import { Button } from 'reactstrap';
// import Button from '../Core/Button'
// import LoginFaceBook from './LoginFaceBook'
import Color from '../../config/fonts'
import { Button } from 'reactstrap';


class Login extends React.Component {
  render () {
    return (
      <div className="container-fluid mt-5">
        <div className="row mt-5 justify-content-center">
          <div className="col-8 col-md-4 mt-5">
            <Logo />
            {/* <LoginFaceBook /> LoginFaceBook */}
           Login
           <Button color="danger">Danger!</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login