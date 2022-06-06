import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

import { theme } from "./theme";
import App from "./App";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyLearning from "./pages/MyLearning";
import MyCourse from "./pages/MyCourse";
import CourseContent from "./components/CourseContent";
import AdminDashboard from "./pages/AdminDashboard";
import ManageCourses from "./components/ManageCourses";
import CoursesTable from "./components/CoursesTable";
import ParticipantsTable from "./components/ParticipantsTable";
import CourseForm from "./components/CourseForm";

import "./index.css";
import PrivateRoute from "./routers/PrivateRoute";
import AdminRoute from "./routers/AdminRoute";
import AccountVerification from "./pages/AccountVerification";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route
              index
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path="signin" element={<Login />} />
            <Route path="signup" element={<Register />} />
            <Route path="verification" element={<AccountVerification />} />
            <Route
              path="cursos"
              element={
                <PrivateRoute>
                  <Courses />
                </PrivateRoute>
              }
            />
            <Route
              path="mis-cursos"
              element={
                <PrivateRoute>
                  <MyLearning />
                </PrivateRoute>
              }
            />
            <Route
              path="curso/:courseId"
              element={
                <PrivateRoute>
                  <MyCourse />
                </PrivateRoute>
              }
            >
              <Route path="contenido/:contentId" element={<CourseContent />} />
            </Route>
            <Route
              path="admin"
              element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              }
            >
              <Route path="cursos" element={<ManageCourses />} />
              <Route path="cursos/form" element={<CourseForm />} />
              <Route path="detalle-cursos" element={<CoursesTable />} />
              <Route path="participantes" element={<ParticipantsTable />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
