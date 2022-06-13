import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

export default function AddAlternativeItem({ content, correct, handleClick }) {
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Checkbox edge="start" checked={correct} disableRipple />
        </ListItemIcon>
        <ListItemText>{content}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
}
