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


const responseFacebook = async (response) => {
  await AuthService.login(response,round)
}
const changetoRegisterPage = async () => {
  if(Cookie.gettokenJWTCookie()){
    console.log('Hi !!!')
    Router.push({
      pathname:'/select'
    })
  }
}

class LoginFaceBook extends React.Component {
  state = {
    round : '',
  }

  componentDidMount () {
    changetoRegisterPage()
  }

  getRound = async () =>{
    await socket.on('round',(newRound) => {
      this.setState({
        round : newRound
      })
    })
  }

  render () {
    return (
      <FacebookLogin
        scope="email"
        autoLoad={false}
        fields="name,email,picture,id"
        appId="288315792032558"
        callback={responseFacebook}
        render={renderProps => (
          <FacebookButton size="large" color="primary" block onClick={renderProps.onClick}>
          Login with Facebook
          </FacebookButton>
        )}
      />
    )
  }
}

export default LoginFaceBook
