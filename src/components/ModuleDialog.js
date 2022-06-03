import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { CourseContext } from "../context";

export default function ModuleDialog({ open, setOpen }) {
  const [moduleName, setModuleName] = useState("");
  const [moduleDescription, setModuleDescription] = useState("");
  const { modules, setModules } = useContext(CourseContext);

  const saveModule = () => {
    setModules([
      ...modules,
      { name: moduleName, description: moduleDescription },
    ]);
    setModuleName("");
    setModuleDescription("");
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Datos del Modulo</DialogTitle>
      <DialogContent>
        <TextField
          variant="standard"
          label="Nombre del Modulo"
          fullWidth
          value={moduleName}
          onChange={(e) => setModuleName(e.target.value)}
          sx={{ mb: 3 }}
        />
        <TextField
          variant="standard"
          label="Descripcion del Modulo"
          fullWidth
          value={moduleDescription}
          onChange={(e) => setModuleDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancelar</Button>
        <Button onClick={saveModule}>Agregar</Button>
      </DialogActions>
    </Dialog>
  );
}
