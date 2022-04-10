import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import About from "./components/About";
import Blog from "./components/Blog";
import Course from "./components/Course";
import Home from "./components/Home";
import Login from "./components/Login";
import MyCourse from "./components/MyCourse";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
import Teachers from "./components/Teachers";

ReactDOM.render(
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
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />
        <Route
          path="course"
          element={
            <PrivateRoute>
              <Course />
            </PrivateRoute>
          }
        />
        <Route
          path="teachers"
          element={
            <PrivateRoute>
              <Teachers />
            </PrivateRoute>
          }
        />
        <Route
          path="blog"
          element={
            <PrivateRoute>
              <Blog />
            </PrivateRoute>
          }
        />
        <Route 
          path="my-course/:course"
          element={
            <PrivateRoute>
              <MyCourse />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
