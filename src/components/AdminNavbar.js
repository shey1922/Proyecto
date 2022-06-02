import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import React from "react";

export default function AdminNavbar() {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginX: 12,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <SchoolIcon
            color="secondary"
            sx={{
              width: 48,
              height: 48,
            }}
          />
          <Typography variant="h4">WebCS</Typography>
        </Box>
        <Typography variant="h5">¡Bienvenido Nombres Apellidos!</Typography>
        <Button color="inherit" size="large">
          Salir
        </Button>
      </Toolbar>
    </AppBar>
  );
}
