import React from 'react'
import styled from 'styled-components';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import AuthAdmin from '../../service/AdminService'
import Cookie from '../../service/CookieService'
import Router from 'next/router'


const Landing = styled(Container)`
  padding : 50px;
`

const changetoAdminPage = async () => {
  if (Cookie.gettokenJWTCookie()) {
    console.log('Hi !!!')
    Router.push({
      pathname: '/admincontrol'
    })
  }
}
class AdminLogin extends React.Component {
  state = {
    username: '',
    password: ''
  }

  componentDidMount = () => {
    changetoAdminPage()
  }

  getAuthAdmin = async () => {
    console.log(this.state.username, this.state.password)
    await AuthAdmin.loginAdmin({ 'username': this.state.username, 'password': this.state.password })
  }

  onChangeUsername = (e) => {
    e.preventDefault()
    this.setState({
      username: e.target.value,
    })
  }

  onChangePassword = (e) => {
    e.preventDefault()
    this.setState({
      password: e.target.value,
    })
  }

  render() {
    return (
      <Container fluid>
        <Landing>
          <h2>ADMIN</h2>
          <Col>
            <Label>ID</Label>
            <Input
              type="text"
              placeholder="Username"
              onChange={this.onChangeUsername}
            />
          </Col>
          <Col>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              placeholder="********"
              onChange={this.onChangePassword}
            />
          </Col>
          <Button className="mt-3" onClick={this.getAuthAdmin}>Login</Button>
        </Landing>
      </Container>
    )
  }
}

export default AdminLogin;