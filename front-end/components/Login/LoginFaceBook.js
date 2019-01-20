import React from 'react'
import Router from 'next/router'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { FacebookButton } from '../Core/Button'
import AuthService from '../../service/AuthService'
import Cookie from '../../service/CookieService'


const responseFacebook = async (response) => {
  console.log(response)
  await AuthService.login(response)
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
  componentDidMount () {
    changetoRegisterPage()
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
