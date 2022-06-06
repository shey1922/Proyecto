import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { API, Auth } from "aws-amplify";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export default function Login() {
  const { setLoggedIn, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
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
      const { username } = await Auth.signIn(
        formValues.email,
        formValues.password
      );
      const currentUser = await API.get("WebcsAPI", `/users/${username}`, {});
      setUser(currentUser);
      setLoggedIn(true);
      currentUser.isAdmin
        ? navigate("/admin-dashboard/cursos", { replace: true })
        : navigate("/", { replace: true });
    } catch (err) {
      setFormValues({
        email: "",
        password: "",
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
          margin="4rem"
          component="form"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
          onSubmit={handleSubmit}
        >
          <Typography variant="h4">Iniciar Sesión</Typography>
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
          <Typography variant="subtitle1">¿Olvidaste tu contraseña?</Typography>
          <Button
            variant="contained"
            type="submit"
            sx={{ borderRadius: "15px" }}
          >
            Iniciar Sesión
          </Button>
        </Box>
        <Box
          paddingX="6rem"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          style={{ background: "linear-gradient(to right, #4e54c8, #8f94fb)" }}
        >
          <Typography variant="h4" color="white">
            ¡Saludos!
          </Typography>
          <Button sx={{ color: "white" }} onClick={() => navigate("/signup")}>
            Registrate
          </Button>
        </Box>
      </Paper>
    </Stack>
  );
}
