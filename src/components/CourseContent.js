import { Box, Typography } from "@mui/material";
import React from "react";

export default function CourseContent(props) {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4" mb={4}>
        Nombre del Tema...
      </Typography>
      <iframe
        width="1168"
        height="657"
        src="https://www.youtube.com/embed/WNVMZ5sfNz0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Box>
  );
}
