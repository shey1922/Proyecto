import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import QuizIcon from "@mui/icons-material/Quiz";
import React from "react";

export default function AddResourceItem({ type, title }) {
  return (
    <ListItem>
      <ListItemIcon>
        {type === "VIDEO" ? <PlayCircleIcon /> : <QuizIcon />}
      </ListItemIcon>
      <ListItemText>{title}</ListItemText>
    </ListItem>
  );
}
