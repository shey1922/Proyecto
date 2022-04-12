import React, { useState, useContext } from "react";
import styled from "styled-components";

import { Auth } from 'aws-amplify'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
import Swal from "sweetalert2";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 64rem;
  border: 1px solid lightgray;
  border-radius: 10px;
  display: flex;
  overflow: hidden;
`;

const Box = styled.div`
  width: 50%;
  padding: 8rem 0;
`;

const Title = styled.h1`
  font-size: 32px;
  color: ${(props) => props.color || "white"};
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
  border-radius: 5px;
  background-color: #eee;
  border: none;
`;

const Button = styled.button`
  border: ${(props) => (props.outline ? "2px solid white" : "none")};
  background-color: ${(props) => (!props.outline ? "#6463C8" : "transparent")};
  color: white;
  margin-top: 10px;
  padding: 5px 20px;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.outline ? "white" : "#2e2cd1")};
    color: ${(props) => props.outline && "#6463C8"};
  }
`;

const Panel = styled.div`
  width: 50%;
  background: linear-gradient(to right, #4e54c8, #8f94fb);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Login() {

  const { setCurrentUser } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await Auth.signIn(email, password);
      setCurrentUser(response.username);
      navigate('/', { replace: true });
    } catch (err) {
      console.error(err);
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  
  return (
    <Container>
      <Wrapper>
        <Box>
          <Title color="gray">Iniciar Sesión</Title>
          <Form onSubmit={handleSubmit}>
            <Input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            <Input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            <span>¿Olvidaste tu contraseña?</span>
            <Button type="submit">INICIAR SESIÓN</Button>
          </Form>
        </Box>
        <Panel>
          <Title>¡Saludos!</Title>
          <Button outline onClick={() => navigate('/register')}>REGISTRATE</Button>
        </Panel>
      </Wrapper>
    </Container>
  );
}
