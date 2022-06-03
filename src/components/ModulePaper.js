import React, { useState } from "react";
import { Button, List, Paper, Stack, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddContentItem from "./AddContentItem";
import AddVideoDialog from "./AddVideoDialog";
import AddQuizzDialog from "./AddQuizzDialog";

export default function ModulePaper({ name, description }) {
  const [content, setContent] = useState([]);
  const [openVideoDialog, setOpenVideoDialog] = useState(false);
  const [openQuizzDialog, setOpenQuizzDialog] = useState(false);

  const handleAddVideo = () => {
    setOpenVideoDialog(true);
  };

  const handleAddQuizz = () => {
    setOpenQuizzDialog(true);
  };

  return (
    <>
      <Paper elevation={3} sx={{ padding: 4, mb: 3 }}>
        <TextField
          hiddenLabel
          size="small"
          fullWidth
          variant="filled"
          InputProps={{
            readOnly: true,
          }}
          sx={{ mb: 3 }}
          value={name}
        />
        <TextField
          hiddenLabel
          size="small"
          fullWidth
          variant="filled"
          InputProps={{
            readOnly: true,
          }}
          sx={{ mb: 3 }}
          value={description}
        />
        <List>
          {content.map((c, i) => (
            <AddContentItem key={i} title={c.title} type={c.type} />
          ))}
        </List>
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AddIcon />}
            onClick={handleAddVideo}
          >
            Video
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AddIcon />}
            onClick={handleAddQuizz}
          >
            Quizz
          </Button>
        </Stack>
      </Paper>
      <AddVideoDialog
        content={content}
        setContent={setContent}
        open={openVideoDialog}
        setOpen={setOpenVideoDialog}
      />
      <AddQuizzDialog
        content={content}
        setContent={setContent}
        open={openQuizzDialog}
        setOpen={setOpenQuizzDialog}
      />
    </>
  );
}
