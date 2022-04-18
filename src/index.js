import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App";
import About from "./components/About";
import Blog from "./components/Blog";
import Course from "./components/Course";
import Courses from "./components/Courses";
import Home from "./components/Home";
import HomeAdmin from "./components/HomeAdmin";
import Login from "./components/Login";
import MyCourse from "./components/MyCourse";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
import Teachers from "./components/Teachers";
import DefaultHome from './components/admin/DefaultHomePage';
import ManageCourse from './components/admin/ManageCourse';
import ManageQuiz from './components/admin/ManageQuiz';
import EditCourse from './components/admin/EditCourse';
import EditQuiz from "./components/admin/EditQuiz";
import EditDetailQuiz from "./components/admin/EditDetailQuiz"
import EditDetailCourse from "./components/admin/EditDetailCourse";

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
        <Route path="home-admin" exact={true} element={<HomeAdmin />} />
        <Route path="courses"  element={<Courses />} />
        <Route path="default-home" exact={true} element={<DefaultHome />} />
        <Route path="manage-course"  exact={true} element={<ManageCourse />} />
        <Route path="manage-quiz"  exact={true} element={<ManageQuiz />} />
        <Route path="edit-course" exact={true} element={<EditCourse />}/>
        <Route path="edit-quiz" exact={true} element={<EditQuiz />}/>
        <Route path="edit-detail-quiz" exact={true} element={<EditDetailQuiz/>}/>
        <Route path="edit-detail-course" exact={true} element={<EditDetailCourse />}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
