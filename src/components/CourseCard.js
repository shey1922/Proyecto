import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

export default function CourseCard(props) {
  const navigate = useNavigate();

  return (
    <Card>
      <CardMedia
        component="img"
        image="https://2evs.co/wp-content/uploads/2021/06/ViolenciaSexualPortada-01.jpg"
        height="128"
        alt="Curso"
      />
      <CardContent>
        <Typography variant="h6">{props.topic}</Typography>
      </CardContent>
      {!props.enrolled ? (
        <CardActions>
          <Button size="small" sx={{ marginRight: "auto" }}>
            Inscribirse
          </Button>
          <AccessTimeFilledIcon fontSize="small" />
          <Typography variant="subtitle2">20 Horas</Typography>
        </CardActions>
      ) : (
        <CardActions>
          <Button size="small" onClick={() => navigate("curso")}>
            Ingresar
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
