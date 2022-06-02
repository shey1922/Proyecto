import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AddModulePaper from "./AddModulePaper";

export default function AddCourseForm() {
  const [modules, setModules] = useState([]);

  const handleAddModule = () => {
    setModules([...modules, { name: "", description: "" }]);
  };

  return (
    <Paper elevation={3} sx={{ mt: 5, padding: 5 }}>
      <form>
        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography variant="h4">Formulario de Curso</Typography>
          <Button variant="contained">Guardar</Button>
        </Box>
        <TextField
          id="courseNameInput"
          label="Nombre del curso"
          variant="outlined"
          fullWidth
          sx={{ display: "block", mb: 2 }}
        />
        <TextField
          id="courseDescriptionInput"
          label="Descripción"
          variant="outlined"
          fullWidth
          sx={{ display: "block", mb: 2 }}
        />
        <Typography variant="h6">Módulos</Typography>
        {modules.map((_module, index) => (
          <AddModulePaper
            key={index}
            modules={modules}
            setModules={setModules}
          />
        ))}
        <Button variant="contained" fullWidth onClick={handleAddModule}>
          Agregar Módulo
        </Button>
      </form>
    </Paper>
  );
}
