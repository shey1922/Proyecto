import React from 'react'
import styled from 'styled-components';

const Title = styled.h1`
  //color: #9c9c9c;
  //text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  margin: 10px 20px 0 0;
  padding: 5px 10px;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #6463C8;
  color: white;
  margin-top: 10px;
  padding: 5px 30px;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
      background-color: #2e2cd1;
  }
`;

function Login() {
    return (
        <>
            <Title>Sign In</Title>
            <Form>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Button type="submit">SIGN IN</Button>
            </Form>
        </>
    )
}

export default Login