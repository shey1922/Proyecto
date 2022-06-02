import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

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
        >
          <Typography variant="h4">Regístrate</Typography>
          <TextField
            id="firstname"
            variant="standard"
            label="Nombres"
            size="small"
          />
          <TextField
            id="lastname"
            variant="standard"
            label="Apellidos"
            size="small"
          />
          <TextField
            id="email"
            variant="standard"
            label="Email"
            type="email"
            size="small"
          />
          <TextField
            id="password"
            type="password"
            variant="standard"
            label="Contraseña"
            size="small"
          />
          <TextField
            id="confirmPassword"
            type="password"
            variant="standard"
            label="Repetir contraseña"
            size="small"
          />
          <Button
            variant="contained"
            sx={{ marginTop: "1rem", borderRadius: "15px" }}
          >
            Registrar
          </Button>
        </Box>
      </Paper>
    </Stack>
  );
}
