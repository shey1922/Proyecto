import React, { useState } from "react";
import { Button, List, Paper, Stack, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddContentItem from "./AddContentItem";
import AddVideoDialog from "./AddVideoDialog";
import AddQuizzDialog from "./AddQuizzDialog";

export default function AddModulePaper({ modules, setModules }) {
  const [added, setAdded] = useState(false);
  const [moduleName, setModuleName] = useState("");
  const [moduleDescription, setModuleDescription] = useState("");
  const [content, setContent] = useState([]);
  const [openVideoDialog, setOpenVideoDialog] = useState(false);
  const [openQuizzDialog, setOpenQuizzDialog] = useState(false);

  const handleSaveModule = () => {
    setAdded(true);
    modules.pop();
    setModules([
      ...modules,
      { name: moduleName, description: moduleDescription, content },
    ]);
  };

  const handleAddVideo = () => {
    setOpenVideoDialog(true);
  };

  const handleAddQuizz = () => {
    setOpenQuizzDialog(true);
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, mb: 3 }}>
      <TextField
        hiddenLabel
        placeholder="Nombre del módulo..."
        size="small"
        fullWidth
        variant={added ? "filled" : "outlined"}
        InputProps={{
          readOnly: added,
        }}
        sx={{ mb: 3 }}
        value={moduleName}
        onChange={(e) => setModuleName(e.target.value)}
      />
      <TextField
        hiddenLabel
        placeholder="Descripción breve..."
        size="small"
        fullWidth
        variant={added ? "filled" : "outlined"}
        InputProps={{
          readOnly: added,
        }}
        sx={{ mb: 3 }}
        value={moduleDescription}
        onChange={(e) => setModuleDescription(e.target.value)}
      />
      {added && (
        <List>
          {content.map((c, i) => (
            <AddContentItem key={i} title={c.title} type={c.type} />
          ))}
        </List>
      )}
      <Stack direction="row" spacing={2} justifyContent="flex-end">
        {added ? (
          <>
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
          </>
        ) : (
          <>
            <Button variant="outlined" color="error">
              Cancelar
            </Button>
            <Button variant="outlined" onClick={handleSaveModule}>
              Guardar
            </Button>
          </>
        )}
      </Stack>
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
    </Paper>
  );
}
