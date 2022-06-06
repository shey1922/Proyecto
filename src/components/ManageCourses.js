import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import AdminCourseCard from "./AdminCourseCard";

export default function ManageCourses() {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          margin: "2rem 0",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h3">Gestión de cursos</Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate("form")}
          sx={{ marginRight: "3rem" }}
        >
          Agregar
        </Button>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <AdminCourseCard />
        </Grid>
        <Grid item xs={3}>
          <AdminCourseCard />
        </Grid>
        <Grid item xs={3}>
          <AdminCourseCard />
        </Grid>
        <Grid item xs={3}>
          <AdminCourseCard />
        </Grid>
      </Grid>
    </>
  );
}
