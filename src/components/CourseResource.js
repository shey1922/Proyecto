import { ListItemButton, ListItemText } from "@mui/material";
import React from "react";

export default function CourseContent(props) {
  return (
    <ListItemButton>
      <ListItemText>{props.name || props.title || props.topic}</ListItemText>
    </ListItemButton>
  );
}
