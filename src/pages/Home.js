import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

import homeImg from "../assets/home-img.png";
import categoryImg1 from "../assets/category-1.png";
import categoryImg2 from "../assets/category-2.png";
import categoryImg3 from "../assets/category-3.png";
import categoryImg4 from "../assets/category-4.png";
import categoryImg5 from "../assets/category-5.png";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Stack direction="row" alignItems="center" sx={{ padding: "2rem 8rem" }}>
        <Box sx={{ width: "50%" }}>
          <img src={homeImg} alt="HomeImg" style={{ width: "100%" }} />
        </Box>
        <Box>
          <Typography variant="h3">
            Lideres en capacitaciones de personal en sector salud
          </Typography>
          <Button
            variant="contained"
            sx={{ margin: "2rem 0" }}
            onClick={() => navigate("/cursos")}
          >
            Empezar
          </Button>
        </Box>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        spacing={4}
        sx={{ margin: "5rem 0" }}
      >
        <Box
          sx={{
            backgroundColor: "#F5F5F5",
            padding: "3rem 5rem",
            textAlign: "center",
          }}
        >
          <img src={categoryImg1} alt="Multiplataforma" />
          <Typography mt="1rem">Multiplataforma</Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#F5F5F5",
            padding: "3rem 5rem",
            textAlign: "center",
          }}
        >
          <img src={categoryImg2} alt="Conocimiento" />
          <Typography mt="1rem">Conocimiento</Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#F5F5F5",
            padding: "3rem 5rem",
            textAlign: "center",
          }}
        >
          <img src={categoryImg3} alt="Rendimiento" />
          <Typography mt="1rem">Rendimiento</Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#F5F5F5",
            padding: "3rem 5rem",
            textAlign: "center",
          }}
        >
          <img src={categoryImg4} alt="Chat Grupal" />
          <Typography mt="1rem">Chat Grupal</Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#F5F5F5",
            padding: "3rem 5rem",
            textAlign: "center",
          }}
        >
          <img src={categoryImg5} alt="Videoconferencia" />
          <Typography mt="1rem">Videoconferencia</Typography>
        </Box>
      </Stack>
      <Footer />
    </>
  );
}
