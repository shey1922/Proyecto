import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await Auth.signUp({
        username: formValues.email,
        password: formValues.password,
        attributes: {
          email: formValues.email,
          given_name: formValues.firstName,
          family_name: formValues.lastName,
        },
      });
      navigate("/verification");
    } catch (err) {
      setFormValues({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Paper
        elevation={3}
        sx={{
          borderRadius: "15px",
          overflow: "hidden",
          display: "flex",
        }}
      >
        <Box
          paddingX="6rem"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          style={{ background: "linear-gradient(to right, #4e54c8, #8f94fb)" }}
        >
          <Typography variant="h4" color="white">
            ¡Bienvenido de vuelta!
          </Typography>
          <Button sx={{ color: "white" }} onClick={() => navigate("/signin")}>
            Iniciar Sesión
          </Button>
        </Box>
        <Box
          padding="4rem"
          component="form"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
          onSubmit={handleSubmit}
        >
          <Typography variant="h4">Regístrate</Typography>
          <TextField
            name="firstName"
            variant="standard"
            label="Nombres"
            size="small"
            value={formValues.firstName}
            onChange={handleInputChange}
          />
          <TextField
            name="lastName"
            variant="standard"
            label="Apellidos"
            size="small"
            value={formValues.lastName}
            onChange={handleInputChange}
          />
          <TextField
            name="email"
            variant="standard"
            label="Email"
            type="email"
            size="small"
            value={formValues.email}
            onChange={handleInputChange}
          />
          <TextField
            name="password"
            type="password"
            variant="standard"
            label="Contraseña"
            size="small"
            value={formValues.password}
            onChange={handleInputChange}
          />
          <TextField
            name="confirmPassword"
            type="password"
            variant="standard"
            label="Repetir contraseña"
            size="small"
            value={formValues.confirmPassword}
            onChange={handleInputChange}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ marginTop: "1rem", borderRadius: "15px" }}
          >
            Registrar
          </Button>
        </Box>
      </Paper>
    </Stack>
  );
}
