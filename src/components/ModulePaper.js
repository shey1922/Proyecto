import React, { useContext, useState } from "react";
import { Button, List, Paper, Stack, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddResourceItem from "./AddResourceItem";
import { CourseContext } from "../context";
import AddQuizzDialog from "./AddQuizzDialog";
import AddVideoDialog from "./AddVideoDialog";

export default function ModulePaper({ name, description, resources }) {
  const {
    openVideoDialog,
    setOpenVideoDialog,
    openQuizzDialog,
    setOpenQuizzDialog,
  } = useContext(CourseContext);

  const [saved, setSaved] = useState(false);
  const [module, setModule] = useState({
    name,
    description,
    resources,
  });

  const handleSave = () => {
    setSaved(true);
    setModule({ ...module });
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, mb: 3 }}>
      <TextField
        hiddenLabel
        placeholder="Nombre del modulo..."
        size="small"
        fullWidth
        variant="standard"
        InputProps={{
          readOnly: saved,
        }}
        sx={{ mb: 3 }}
        value={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <TextField
        hiddenLabel
        placeholder="Descripción del modulo..."
        size="small"
        fullWidth
        variant="standard"
        InputProps={{
          readOnly: saved,
        }}
        sx={{ mb: 3 }}
        value={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}
      />
      <List>
        {module.resources.map((resource, index) => (
          <AddResourceItem
            key={index}
            title={resource.title}
            type={resource.type}
          />
        ))}
      </List>
      <Stack direction="row" spacing={2} justifyContent="flex-end">
        {saved ? (
          <>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<AddIcon />}
              onClick={() => setOpenVideoDialog(true)}
            >
              Video
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<AddIcon />}
              onClick={() => setOpenQuizzDialog(true)}
            >
              Quizz
            </Button>
          </>
        ) : (
          <>
            <Button variant="outlined" color="error">
              Cancelar
            </Button>
            <Button variant="outlined" onClick={handleSave}>
              Guardar
            </Button>
          </>
        )}
      </Stack>
      <AddVideoDialog
        module={module}
        setModule={setModule}
        open={openVideoDialog}
        setOpen={setOpenVideoDialog}
      />
      <AddQuizzDialog
        module={module}
        setModule={setModule}
        open={openQuizzDialog}
        setOpen={setOpenQuizzDialog}
      />
    </Paper>
  );
}
