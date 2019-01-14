import React from 'react'
import Router from 'next/router'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { Button } from 'reactstrap';
import AuthService from '../../service/AuthService'
import RegisterService from '../../service/RegisterService'

const responseFacebook = async (response) => {
  console.log(response)
  await AuthService.login(response)
}
const changetoRegisterPage = async () => {
  const profile = await RegisterService.getProfile()
  console.log(profile)
  if (profile.data.confirm_register === 1) {
    Router.push({
      pathname: '/popularvote'
    })
  } else {
    Router.push({
      pathname: '/index'
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
          <Button size="large" block type="primary" onClick={renderProps.onClick}>Login!</Button>
        )}
      />
    )
  }
}

export default LoginFaceBook
