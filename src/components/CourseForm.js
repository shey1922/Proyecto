import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ModulePaper from "./ModulePaper";
import { CourseContext } from "../context";

export default function CourseForm() {
  const [openVideoDialog, setOpenVideoDialog] = useState(false);
  const [openQuizzDialog, setOpenQuizzDialog] = useState(false);

  const [course, setCourse] = useState({
    name: "",
    description: "",
    modules: [],
  });

  const handleClick = () => {
    setCourse({
      ...course,
      modules: [
        ...course.modules,
        { name: "", description: "", resources: [] },
      ],
    });
  };

  return (
    <CourseContext.Provider
      value={{
        course,
        setCourse,
        openVideoDialog,
        setOpenVideoDialog,
        openQuizzDialog,
        setOpenQuizzDialog,
      }}
    >
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
            value={course.name}
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            sx={{ display: "block", mb: 2 }}
          />
          <TextField
            id="courseDescriptionInput"
            label="Descripción"
            variant="outlined"
            fullWidth
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
            sx={{ display: "block", mb: 2 }}
          />
          <Typography variant="h6">Módulos</Typography>
          {course.modules.map((module, index) => (
            <ModulePaper key={index} {...module} />
          ))}
          <Button variant="contained" fullWidth onClick={handleClick}>
            Agregar Módulo
          </Button>
        </form>
      </Paper>
    </CourseContext.Provider>
  );
}
