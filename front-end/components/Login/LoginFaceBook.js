import React from 'react'
import Router from 'next/router'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { FacebookButton } from '../Core/Button'
import AuthService from '../../service/AuthService'
import Cookie from '../../service/CookieService'
import ENV from '../../config/envConfig'
import socketIOClient from 'socket.io-client'

const socket = socketIOClient(ENV.PATH_SOCKET)

let round;

const data = []

const responseFacebook = async (response) => {
  let round = localStorage.getItem('round')
  data.push({
    userID:response.userID,
    round: round
  })
  await AuthService.login(data)
}

const changetoRegisterPage = async () => {
  if (Cookie.gettokenJWTCookie()) {
    console.log('Hi !!!')
    Router.push({
      pathname: '/select'
    })
  }
}



class LoginFaceBook extends React.Component {
  state = {
    round: 0,
    showLoginBtn : 'hidden'
  }

  componentDidMount() {
    changetoRegisterPage()
    this.getRound()
  }

  getRound =  () => {
     socket.on('round', (newRound) => {
      if(newRound === 1 || newRound === 2){
        this.setState({
          round : newRound,
          showLoginBtn : 'initial'
        })
      }
      console.log(this.state.round)
      localStorage.setItem('round',this.state.round)
    })
  }

  
  render() {
    return (
      <FacebookLogin
        scope="email"
        autoLoad={false}
        fields="name,email,picture,id"
        appId="288315792032558"
        callback={responseFacebook}
        render={renderProps => (
          <FacebookButton size="large" color="primary" block onClick={renderProps.onClick} show={this.state.showLoginBtn}>
            Login with Facebook
          </FacebookButton>
        )}
      />
    )
  }
}

export default LoginFaceBook
