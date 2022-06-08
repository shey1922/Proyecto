import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import AddModulePaper from "./AddModulePaper";
import { AuthContext, CourseContext } from "../context";
import { API } from "aws-amplify";

export default function CourseForm() {
  const { user } = useContext(AuthContext);

  const [openVideoDialog, setOpenVideoDialog] = useState(false);
  const [openQuizzDialog, setOpenQuizzDialog] = useState(false);
  const [showModulePaper, setShowModulePaper] = useState(false);

  const [course, setCourse] = useState({
    topic: "",
    description: "",
    modules: [],
    createdBy: user.id,
  });

  const handleClick = () => {
    setShowModulePaper(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("WebcsAPI", "/courses", {
        body: course,
      });
      console.log(res);
    } catch (err) {
      console.error(err);
    }
    setCourse({
      topic: "",
      description: "",
      modules: [],
      createdBy: user.id,
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
            label="Tema"
            variant="outlined"
            fullWidth
            value={course.topic}
            onChange={(e) => setCourse({ ...course, topic: e.target.value })}
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
