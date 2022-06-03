import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ModulePaper from "./ModulePaper";
import ModuleDialog from "./ModuleDialog";
import { CourseContext } from "../context";

export default function CourseForm() {
  const [openModuleDialog, setOpenModuleDialog] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [modules, setModules] = useState([]);

  const handleAddModule = () => {
    setOpenModuleDialog(true);
  };

  return (
    <CourseContext.Provider value={{ modules, setModules }}>
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
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            sx={{ display: "block", mb: 2 }}
          />
          <TextField
            id="courseDescriptionInput"
            label="Descripción"
            variant="outlined"
            fullWidth
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            sx={{ display: "block", mb: 2 }}
          />
          <Typography variant="h6">Módulos</Typography>
          {modules.map((module, index) => (
            <ModulePaper key={index} {...module} />
          ))}
          <Button variant="contained" fullWidth onClick={handleAddModule}>
            Agregar Módulo
          </Button>
        </form>
      </Paper>
      <ModuleDialog open={openModuleDialog} setOpen={setOpenModuleDialog} />
    </CourseContext.Provider>
  );
}
