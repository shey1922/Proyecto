import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import React, { useContext } from "react";
import { AuthContext } from "../context";
import { Auth } from "aws-amplify";

export default function AdminNavbar() {
  const { setLoggedIn, setUser, user } = useContext(AuthContext);

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
        <Typography variant="h5">
          ¡Bienvenido {user.firstName + " " + user.lastName}!
        </Typography>
        <Button color="inherit" size="large" onClick={handleLogOut}>
          Salir
        </Button>
      </Toolbar>
    </AppBar>
  );
}
