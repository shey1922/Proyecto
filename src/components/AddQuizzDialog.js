import {
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
  const [showQuestionPaper, setShowQuestionPaper] = useState(false);
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([]);

  const handleSave = () => {
    setContent([...content, { title, questions, type: "QUIZ" }]);
    setTitle("");
    setQuestions([]);
    setOpen(false);
  };

  const handleAddQuestion = () => {
    setShowQuestionPaper(true);
  };

  const handleCancelButton = () => {
    setTitle("");
    setQuestions([]);
    setOpen(false);
  };

  return (
    <Dialog open={open} fullWidth>
      <DialogTitle>Crear Cuestionario</DialogTitle>
      <DialogContent>
        <TextField
          variant="standard"
          label="Titulo"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mb: 3 }}
        />
        {questions.map((_question, index) => (
          <AddQuestionPaper
            key={index}
            saved={true}
            questions={questions}
            setQuestions={setQuestions}
          />
        ))}
        {showQuestionPaper && (
          <AddQuestionPaper
            setShow={setShowQuestionPaper}
            questions={questions}
            setQuestions={setQuestions}
            saved={false}
          />
        )}
        <Button variant="contained" fullWidth onClick={handleAddQuestion}>
          Agregar Enunciado
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancelButton}>Cancelar</Button>
        <Button onClick={handleSave}>Guardar</Button>
      </DialogActions>
    </Dialog>
  );
}
