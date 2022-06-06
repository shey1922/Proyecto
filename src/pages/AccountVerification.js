import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AccountVerification() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    code: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await Auth.confirmSignUp(formValues.email, formValues.code);
      navigate("/signin", { replace: true });
    } catch (err) {
      setFormValues({
        email: "",
        code: "",
      });
    }
  };

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  return (
    <Stack justifyContent="center" alignItems="center" height="100vh">
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" mb={1} textAlign="center">
          Verificación
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="standard"
            value={formValues.email}
            onChange={handleInputChange}
            fullWidth
            sx={{ display: "block", mb: 3 }}
          />
          <TextField
            label="Código"
            name="code"
            variant="standard"
            value={formValues.code}
            onChange={handleInputChange}
            fullWidth
            sx={{ display: "block", mb: 3 }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ display: "block", marginX: "auto" }}
          >
            Verificar
          </Button>
        </form>
      </Paper>
    </Stack>
  );
}
