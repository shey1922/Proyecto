import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { QuizzContext } from "../context";
import AddQuestionPaper from "./AddQuestionPaper";
import QuestionPaper from "./QuestionPaper";

export default function AddQuizzDialog({ open, setOpen, module, setModule }) {
  const [quiz, setQuiz] = useState({
    title: "",
    questions: [],
    type: "QUIZ",
  });

  const [showQuestionPaper, setShowQuestionPaper] = useState(false);

  const handleAddQuestion = () => {
    setShowQuestionPaper(true);
  };

  const handleAdd = () => {
    setModule({ ...module, resources: [...module.resources, quiz] });
    setQuiz({
      title: "",
      questions: [],
      type: "QUIZ",
    });
    setOpen(false);
  };

  const handleCancel = () => {
    setQuiz({
      title: "",
      questions: [],
      type: "QUIZ",
    });
    setOpen(false);
  };

  return (
    <QuizzContext.Provider value={{ quiz, setQuiz }}>
      <Dialog open={open} fullWidth>
        <DialogTitle>Crear Cuestionario</DialogTitle>
        <DialogContent>
          <TextField
            variant="standard"
            label="Titulo"
            fullWidth
            value={quiz.title}
            onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
            sx={{ mb: 3 }}
          />
          {quiz.questions.map((question, index) => (
            <QuestionPaper key={index} {...question} />
          ))}
          {showQuestionPaper && (
            <AddQuestionPaper setShow={setShowQuestionPaper} />
          )}
          <Button variant="contained" fullWidth onClick={handleAddQuestion}>
            Agregar Pregunta
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancelar</Button>
          <Button onClick={handleAdd}>Agregar</Button>
        </DialogActions>
      </Dialog>
    </QuizzContext.Provider>
  );
}
