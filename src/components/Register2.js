import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 52rem;
  border: 1px solid lightgray;
  box-shadow: 3px;
  border-radius: 10px;
  display: flex;
  justify-content: around;
`;

const Wrapper = styled.div`
  padding: 5rem 2rem;
`;

const Title = styled.h1`
  color: ${props => props.color || 'white'};
  text-align: center;
`;

const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin: 10px 5px;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #eee;
`;

const Button = styled.button`
  width: 12rem;
  background-color: #6463C8;
  color: white;
  margin-top: 10px;
  padding: 5px 20px;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
      background-color: #2e2cd1;
  }
`;

const Greeting = styled.div`
  width: 100%;
  border-radius: 10px 0 0 10px;
  background: linear-gradient(to right, #4e54c8, #8f94fb);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function Register2() {
    return (
        <Container>
            <Greeting>
                <Title>¡Bienvenido de vuelta!</Title>
            </Greeting>
            <Wrapper>
                <Title color="gray">Sign Up</Title>
                <Form>
                    <Input type="text" placeholder="Name" />
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Password" />
                    <Input type="password" placeholder="Repeat Password" />
                    <Button type="submit">SIGN UP</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}
