import React from 'react'
import Router from 'next/router'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const responseFacebook = async (response) => {
  await AuthService.login(response)
}
const changetoRegisterPage = async () => {
  const profile = await RegisterService.getProfile()
  if (profile.data.confirm_register === 1) {
    Router.push({
      pathname: '/regiscomplete'
    })
  } else {
    Router.push({
      pathname: '/register'
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
        appId="293604811359850"
        callback={responseFacebook}
        render={renderProps => (
          <Button size="large" block type="primary" onClick={renderProps.onClick}>Login!</Button>
        )}
      />
    )
  }
}

export default LoginFaceBook
