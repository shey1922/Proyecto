import {
  Card,
  CardActions,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";

export default function AdminCourseCard() {
  return (
    <Card sx={{ width: "14rem" }}>
      <CardMedia
        component="img"
        image="https://picsum.photos/256"
        alt="Curso"
        height="128"
      />
      <CardActions>
        <Typography variant="subtitle1">Titulo</Typography>
        <IconButton sx={{ marginLeft: "auto" }} aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
