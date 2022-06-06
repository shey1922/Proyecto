import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import AdminSideBar from "../components/AdminSideBar";

export default function AdminDashboard() {
  return (
    <Box>
      <AdminNavbar />
      <Stack direction="row">
        <AdminSideBar />
        <Container>
          <Outlet />
        </Container>
      </Stack>
    </Box>
  );
}
