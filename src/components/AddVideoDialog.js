import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { CourseContext } from "../context";

export default function AddVideoDialog({ open, setOpen, module, setModule }) {
  const [video, setVideo] = useState({
    title: "",
    url: "",
    type: "VIDEO",
  });

  const handleClick = () => {
    setModule({ ...module, resources: [...module.resources, video] });
    setVideo({
      title: "",
      url: "",
      type: "VIDEO",
    });
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <Box sx={{ width: "24rem" }}>
        <DialogTitle>Contenido del Video</DialogTitle>
        <DialogContent>
          <TextField
            sx={{ display: "block" }}
            variant="standard"
            label="Titulo"
            fullWidth
            value={video.title}
            onChange={(e) => setVideo({ ...video, title: e.target.value })}
          />
          <TextField
            sx={{ display: "block" }}
            variant="standard"
            label="Video URL"
            fullWidth
            value={video.url}
            onChange={(e) => setVideo({ ...video, url: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancelar</Button>
          <Button onClick={handleClick}>Agregar</Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
