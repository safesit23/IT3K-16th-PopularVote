import React from 'react'
// import LoginFaceBook from './LoginFaceBook'
import Color from '../../config/fonts'
import { Button } from 'reactstrap';


class Login extends React.Component {
  render () {
    return (
      <div className="container-fluid mt-5">
        <div className="row mt-5 justify-content-center">
          <div className="col-8 col-md-4 mt-5">
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