import {
  Box,
  Button,
  Container,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import CourseModule from "../components/CourseModule";

export default function MyCourse() {
  return (
    <Box sx={{ height: "100vh" }}>
      <Stack direction="row" sx={{ height: "100%" }}>
        <Stack sx={{ backgroundColor: "#eee", width: "20%", overflow: "auto" }}>
          <Box
            bgcolor="secondary.main"
            sx={{ marginBottom: 2, padding: "2rem" }}
          >
            <Typography variant="h4" color="white" mb={3}>
              Curso atención integral a víctimas de violencia sexual
            </Typography>
            <Typography variant="body1" color="white">
              Progeso
            </Typography>
            <LinearProgress variant="determinate" value={50} />
          </Box>
          <Box>
            <CourseModule name="PRELIMINAR" />
            <CourseModule name="MODULO 1" />
            <CourseModule name="MODULO 2" />
            <CourseModule name="MODULO 3" />
            <CourseModule name="VIDEOCONFERENCIAS" />
          </Box>
          <Stack
            sx={{
              backgroundColor: "#fff",
              margin: "1rem 0",
              padding: 3,
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              sx={{ marginBottom: 3 }}
            >
              Volver al curso
            </Button>
            <Button variant="contained" color="secondary">
              Valorar Curso
            </Button>
          </Stack>
        </Stack>
        <Container>
          <Outlet></Outlet>
        </Container>
      </Stack>
    </Box>
  );
}
