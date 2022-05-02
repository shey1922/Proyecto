import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import theme from "../theme";

const Wrapper = styled.div`
  padding: 4rem 1rem;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

const Form = styled.form`
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
  background-color: ${theme.primary};
  color: white;
  padding: 5px 20px;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.secondary};
  }
`;

const Title = styled.h1`
  color: gray;
  text-align: center;
`;

export default function Verification(props) {
  const navigate = useNavigate();
  const [code, setCode] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await Auth.confirmSignUp(props.email, code);
      navigate("/login", { replace: true });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Wrapper>
      <Title>Verificación</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          value={props.email}
          disabled
        />
        <Input
          type="text"
          placeholder="Ingrese el código"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <Button type="submit">Verificar</Button>
      </Form>
    </Wrapper>
  );
}
