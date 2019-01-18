import React from 'react'
import styled from 'styled-components';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';

const Landing = styled(Container)`
  padding : 50px;
`
class AdminLogin extends React.Component{
    render(){
        return(
          <Container fluid>
          <Landing>
            <h2>ADMIN</h2>
            <Form className="form">
              <Col>
                <FormGroup>
                  <Label>ID</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="email@mail.com"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                  type="password"
                  id="examplePassword"
                  placeholder="********"
                />
              </FormGroup>
            </Col>
            <Button>Sign In</Button>
            </Form>
        </Landing>
      </Container>
        )
    }
}

export default AdminLogin;