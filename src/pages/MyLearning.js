import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MyLearning() {
  return (
    <>
      <Navbar />
      <Container sx={{ margin: "3rem auto" }}>
        <Divider textAlign="left" sx={{ marginBottom: "1rem" }}>
          <Typography variant="h5">MIS CURSOS</Typography>
        </Divider>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={3} md={3}>
            <CourseCard enrolled={true} topic="Curso 1" />
          </Grid>
          <Grid item xs={2} sm={3} md={3}>
            <CourseCard enrolled={true} topic="Curso 2" />
          </Grid>
          <Grid item xs={2} sm={3} md={3}>
            <CourseCard enrolled={true} topic="Curso 3" />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
