import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AddModulePaper from "./AddModulePaper";
import { CourseContext } from "../context";

export default function CourseForm() {
  const [openVideoDialog, setOpenVideoDialog] = useState(false);
  const [openQuizzDialog, setOpenQuizzDialog] = useState(false);
  const [showModulePaper, setShowModulePaper] = useState(false);

  const [course, setCourse] = useState({
    name: "",
    description: "",
    modules: [],
  });

  const handleClick = () => {
    setShowModulePaper(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCourse({
      name: "",
      description: "",
      modules: [],
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
        <form onSubmit={handleSubmit}>
          <Box display="flex" justifyContent="space-between" mb={3}>
            <Typography variant="h4">Formulario de Curso</Typography>
            <Button variant="contained" type="submit">
              Guardar
            </Button>
          </Box>
          <TextField
            label="Nombre del curso"
            variant="outlined"
            fullWidth
            value={course.name}
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            sx={{ display: "block", mb: 2 }}
          />
          <TextField
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
            <AddModulePaper key={index} {...module} saved={true} />
          ))}
          {showModulePaper && <AddModulePaper setShow={setShowModulePaper} />}
          {!showModulePaper && (
            <Button variant="contained" fullWidth onClick={handleClick}>
              Agregar Módulo
            </Button>
          )}
        </form>
      </Paper>
    </CourseContext.Provider>
  );
}
