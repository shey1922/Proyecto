import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
  padding: 8rem 2rem;
`;

const Title = styled.h1`
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
  width: 12rem;
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
  width: 100%;
  background: linear-gradient(to right, #4e54c8, #8f94fb);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const [showConfirmation, setshowConfirmation] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await Auth.signUp(email, password);
      setshowConfirmation(true);
    } catch (err) {
      console.error("Error en registro de usuario");
    }
  };

  const handleVerification = async (event) => {
    event.preventDefault();
    try {
      await Auth.confirmSignUp(email, code);
      setshowConfirmation(false);
      navigate("/login", { replace: true });
    } catch (err) {
      console.error("Error en verificación de usuario");
    }
  };

  return (
    <Container>
      {showConfirmation ? (
        <Wrapper>
          <Box>
            <Title color="gray">Verificación</Title>
            <Form onSubmit={handleVerification}>
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Ingrese codigo de 6 dígitos..."
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <Button type="submit">Verificar</Button>
            </Form>
          </Box>
        </Wrapper>
      ) : (
        <Wrapper>
          <Panel>
            <Title>¡Bienvenido de vuelta!</Title>
            <Button outline onClick={() => navigate("/login")}>
              Sign In
            </Button>
          </Panel>
          <Box>
            <Title color="gray">Sign Up</Title>
            <Form onSubmit={handleSubmit}>
              
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Repeat Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Button type="submit">SIGN UP</Button>
            </Form>
          </Box>
        </Wrapper>
      )}
    </Container>
  );
}