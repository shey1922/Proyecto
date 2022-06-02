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

export default function Login() {
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
          padding="4rem"
          component="form"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
        >
          <Typography variant="h4">Iniciar Sesión</Typography>
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
          <Typography variant="subtitle1">¿Olvidaste tu contraseña?</Typography>
          <Button variant="contained" sx={{ borderRadius: "15px" }}>
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
