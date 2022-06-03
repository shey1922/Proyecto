import {
  Button,
  Fab,
  FormControl,
  FormControlLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import React, { useState } from "react";
import AddAlternativeItem from "./AddAlternativeItem";

export default function AddQuestionPaper({
  questions,
  setQuestions,
  setShow,
  saved,
}) {
  const [statement, setStatement] = useState("");
  const [content, setContent] = useState("");
  const [alternatives, setAlternatives] = useState([]);
  const [option, setOption] = useState("B");

  const handleSaveQuestion = () => {
    setQuestions([...questions, { statement, option, alternatives }]);
    setStatement("");
    setAlternatives([]);
    setShow(false);
  };

  const handleAddAlternative = () => {
    setAlternatives([...alternatives, { content, isCorrect: false }]);
    setContent("");
  };

  const onClickAlternative = (index) => {
    const newAlternatives = [...alternatives];
    newAlternatives[index].isCorrect = !newAlternatives[index].isCorrect;
    setAlternatives(newAlternatives);
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
      <FormControl disabled={saved} sx={{ display: "block" }}>
        <RadioGroup
          row
          aria-labelledby="questionType"
          name="row-radio-buttons-group"
          value={option}
          onChange={(e) => setOption(e.target.value)}
        >
          <FormControlLabel
            value="B"
            control={<Radio />}
            label="Verdadero/Falso"
          />
          <FormControlLabel value="M" control={<Radio />} label="Múltiple" />
        </RadioGroup>
      </FormControl>
      {option === "B" ? (
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Verdadero</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Falso</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      ) : (
        <>
          <List>
            {alternatives.map((alternative, index) => (
              <AddAlternativeItem
                key={index}
                {...alternative}
                handleClick={() => onClickAlternative(index)}
              />
            ))}
          </List>
          <TextField
            hiddenLabel
            fullWidth
            size="small"
            variant="outlined"
            placeholder="Inserte alternativa..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="secondary"
            size="small"
            startIcon={<AddIcon />}
            onClick={handleAddAlternative}
          >
            Alternativa
          </Button>
        </>
      )}
      <Stack direction="row" justifyContent="flex-end" spacing={2}>
        <Fab color="error" aria-label="add" size="small">
          <DeleteIcon />
        </Fab>
        <Fab
          color="primary"
          aria-label="add"
          size="small"
          onClick={handleSaveQuestion}
          disabled={saved}
        >
          <SaveIcon />
        </Fab>
      </Stack>
    </Paper>
  );
}
