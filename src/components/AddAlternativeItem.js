import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import React from "react";

export default function AddAlternativeItem({
  content,
  isCorrect,
  handleClick,
}) {
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={handleClick}>
        <ListItemText>{content}</ListItemText>
        {isCorrect && (
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
        )}
      </ListItemButton>
    </ListItem>
  );
}
