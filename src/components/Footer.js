import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      sx={{
        padding: "3rem 0",
        backgroundColor: "#F5F5F5",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "5rem",
        }}
      >
        <Box>
          <Typography variant="h6">Explorar</Typography>
          <List>
            <ListItem>
              <Typography>Inicio</Typography>
            </ListItem>
            <ListItem>
              <Typography>Cursos</Typography>
            </ListItem>
            <ListItem>
              <Typography>Mi Aprendizaje</Typography>
            </ListItem>
            <ListItem>
              <Typography>Foro</Typography>
            </ListItem>
          </List>
        </Box>
        <Box>
          <Typography variant="h6">Redes Sociales</Typography>
          <List>
            <ListItem>
              <Typography>MINSA</Typography>
            </ListItem>
            <ListItem>
              <Typography>Facebook</Typography>
            </ListItem>
            <ListItem>
              <Typography>Twitter</Typography>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Divider variant="middle" sx={{ margin: "2rem 0" }} />
      <Typography variant="h6" sx={{ alignSelf: "center" }}>
        Creado por{" "}
        <Typography variant="h6" color="secondary" component="span">
          {" "}
          Sheyla Mallma{" "}
        </Typography>{" "}
        | Todos los derechos reservados
      </Typography>
    </Box>
  );
}
