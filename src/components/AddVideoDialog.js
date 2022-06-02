import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

export default function AddVideoDialog({ open, setOpen, content, setContent }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setContent([...content, { title, url, type: "VIDEO" }]);
    setTitle("");
    setUrl("");
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <Box component="form" sx={{ width: "24rem" }} onSubmit={handleSubmit}>
        <DialogTitle>Contenido del Video</DialogTitle>
        <DialogContent>
          <TextField
            sx={{ display: "block" }}
            variant="standard"
            label="Titulo"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            sx={{ display: "block" }}
            variant="standard"
            label="Video URL"
            fullWidth
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancelar</Button>
          <Button type="submit">Agregar</Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
