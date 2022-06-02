import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ViewListIcon from "@mui/icons-material/ViewList";
import PeopleIcon from "@mui/icons-material/People";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminSideBar() {
  const navigate = useNavigate();

  return (
    <Paper sx={{ color: "#808080" }}>
      <Typography variant="h5" mx={2} my={1}>
        INSTRUCTOR
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("cursos")}>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText>Gestionar Cursos</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ViewListIcon />
            </ListItemIcon>
            <ListItemText>Lista de cursos</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText>Participantes</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Paper>
  );
}
