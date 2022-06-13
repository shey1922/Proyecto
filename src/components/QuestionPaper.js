import {
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React from "react";

export default function QuestionPaper({ statement, alternatives }) {
  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <TextField
        hiddenLabel
        size="small"
        fullWidth
        variant="filled"
        defaultValue={statement}
        sx={{ mb: 3 }}
      />
      <RadioGroup>
        {alternatives.map((alternative, index) => (
          <FormControlLabel
            key={index}
            control={<Radio />}
            label={alternative.content}
            checked={alternative.correct}
          />
        ))}
      </RadioGroup>
    </Paper>
  );
}
