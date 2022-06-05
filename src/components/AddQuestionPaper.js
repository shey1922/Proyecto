import { Button, List, Paper, Stack, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useContext, useState } from "react";
import AddAlternativeItem from "./AddAlternativeItem";
import SaveIcon from "@mui/icons-material/Save";
import { QuizzContext } from "../context";

export default function AddQuestionPaper({ setShow }) {
  const { quiz, setQuiz } = useContext(QuizzContext);
  const [question, setQuestion] = useState({
    statement: "",
    alternatives: [],
  });

  const [alternative, setAlternative] = useState({
    text: "",
    correct: false,
  });

  const handleAlternativeClick = (index) => () => {
    const updatedAlternatives = question.alternatives.map((alternative) => ({
      ...alternative,
      correct: false,
    }));
    updatedAlternatives[index].correct = true;
    setQuestion({ ...question, alternatives: updatedAlternatives });
  };

  const handleAddAlternative = () => {
    setQuestion({
      ...question,
      alternatives: [...question.alternatives, alternative],
    });
    setAlternative({
      text: "",
      correct: false,
    });
  };

  const handleSave = () => {
    setQuiz({ ...quiz, questions: [...quiz.questions, question] });
    setQuestion({
      statement: "",
      alternatives: [],
    });
    setShow(false);
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, mb: 3 }}>
      <TextField
        label="Pregunta"
        size="small"
        fullWidth
        variant="standard"
        value={question.statement}
        onChange={(e) =>
          setQuestion({ ...question, statement: e.target.value })
        }
        sx={{ mb: 3 }}
      />
      {question.alternatives.length > 0 && (
        <List>
          {question.alternatives.map((alternative, index) => (
            <AddAlternativeItem
              key={index}
              {...alternative}
              handleClick={handleAlternativeClick(index)}
            />
          ))}
        </List>
      )}
      <TextField
        hiddenLabel
        fullWidth
        size="small"
        variant="outlined"
        placeholder="Alternativa..."
        value={alternative.text}
        onChange={(e) =>
          setAlternative({ ...alternative, text: e.target.value })
        }
        sx={{ mb: 3 }}
      />
      <Stack direction="row" justifyContent="space-between">
        <Button
          variant="contained"
          color="secondary"
          size="small"
          startIcon={<AddIcon />}
          onClick={handleAddAlternative}
        >
          Alternativa
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon />}
          onClick={handleSave}
        >
          Guardar
        </Button>
      </Stack>
    </Paper>
  );
}
