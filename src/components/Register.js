import { API, Auth } from "aws-amplify";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Verification from "./Verification";

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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiPromise = API.post("proyectoApi", "/users", {
      body: {
        firstName,
        lastName,
        username,
        email
      },
    });

    const authPromise = Auth.signUp({
      username: email,
      password,
      attributes: {
        email
      }
    });

    Promise.all([apiPromise, authPromise])
      .then(responses => {
        setShowConfirmation(true);
      })
      .catch(err => {
        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
        setUsername("");
        setConfirmPassword("");
      });
  };

  return (
    <Container>
      {showConfirmation ? (
       <Verification email={email} /> 
      ) : (
        <Wrapper>
          <Panel>
            <Title>¡Bienvenido de vuelta!</Title>
            <Button outline onClick={() => navigate("/login")}>
              INICIAR SESIÓN
            </Button>
          </Panel>
          <Box>
            <Title color="gray">REGISTRO DE USUARIO</Title>
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Nombres"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Apellidos"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {/* <Input
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              /> */}
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
              <Button type="submit">REGISTRAR</Button>
            </Form>
          </Box>
        </Wrapper>
      )}
    </Container>
  );
}
