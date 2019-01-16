import React from 'react'
import styled from 'styled-components';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';

class AdminLogin extends React.Component{
    render(){
        return(
            <Container fluid>
            <Container>
                <h2>Sign In</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
                </Container>
            </Container>
        )
    }
}

export default AdminLogin;