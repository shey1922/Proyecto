import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import { AuthContext } from "../context";

export default function Navbar() {
  const { setLoggedIn, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await Auth.signOut();
      setLoggedIn(false);
      setUser(null);
    } catch (err) {
      console.error();
    }
  };

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          margin: "0 5rem",
          display: "flex",
          justifyContent: "space-between",
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
              width: "48px",
              height: "48px",
            }}
          />
          <Typography variant="h4">WebCS</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Button color="inherit" onClick={() => navigate("/")}>
            Inicio
          </Button>
          <Button color="inherit" onClick={() => navigate("/cursos")}>
            Cursos
          </Button>
          <Button color="inherit" onClick={() => navigate("/mis-cursos")}>
            Mi Aprendizaje
          </Button>
          <Button color="inherit">Foro</Button>
          <Button color="inherit" onClick={handleLogOut}>
            Salir
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
