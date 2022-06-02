import {
  Button,
  Fab,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";

export default function AddQuestionPaper({ questions, setQuestions }) {
  const [saved, setSaved] = useState(false);
  const [statement, setStatement] = useState("");
  const [binary, setBinary] = useState(false);
  const [multipleOption, setMultipleOption] = useState(false);

  const handleSaveQuestion = () => {
    questions.pop();
    setQuestions([...questions, { statement }]);
    setStatement("");
    setSaved(true);
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, mb: 3 }}>
      <TextField
        hiddenLabel
        placeholder="Ingrese un enunciado"
        size="small"
        fullWidth
        variant={saved ? "filled" : "outlined"}
        InputProps={{ readOnly: saved }}
        value={statement}
        onChange={(e) => setStatement(e.target.value)}
        sx={{ mb: 3 }}
      />
      <FormControl disabled={saved}>
        <RadioGroup
          row
          aria-labelledby="quizzType"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="B"
            control={<Radio />}
            hiddenLabel
            label="Verdadero/Falso"
          />
          <FormControlLabel value="M" control={<Radio />} label="Múltiple" />
        </RadioGroup>
      </FormControl>
      <Stack direction="row" justifyContent="flex-end" spacing={2}>
        {!saved ? (
          <>
            <Fab color="error" aria-label="add" size="small">
              <DeleteIcon />
            </Fab>
            <Fab
              color="primary"
              aria-label="add"
              size="small"
              onClick={handleSaveQuestion}
            >
              <CheckIcon />
            </Fab>
          </>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            size="small"
            startIcon={<AddIcon />}
          >
            Alternativa
          </Button>
        )}
      </Stack>
    </Paper>
  );
}
