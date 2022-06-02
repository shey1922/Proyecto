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
import AddQuestionPaper from "./AddQuestionPaper";

export default function AddQuizzDialog({ open, setOpen, content, setContent }) {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setContent([...content, { title, questions, type: "QUIZ" }]);
    setTitle("");
    setQuestions([{ statement: "" }]);
    setOpen(false);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { statement: "" }]);
  };

  const handleCancelButton = () => {
    setQuestions([{ statement: "" }]);
    setOpen(false);
  };

  return (
    <Dialog open={open} fullWidth>
      <Box component="form" onSubmit={handleSubmit}>
        <DialogTitle>Crear Cuestionario</DialogTitle>
        <DialogContent>
          <TextField
            variant="standard"
            label="Titulo"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ marginBottom: 3 }}
          />
          {questions.map((_question, index) => (
            <AddQuestionPaper
              key={index}
              questions={questions}
              setQuestions={setQuestions}
            />
          ))}
          <Button variant="contained" fullWidth onClick={handleAddQuestion}>
            Agregar Enunciado
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelButton}>Cancelar</Button>
          <Button type="submit">Guardar</Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
