import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App";
import About from "./components/About";
import Blog from "./components/Blog";
import Home from "./components/Home";
import HomeAdmin from "./components/HomeAdmin";
import Login from "./components/Login";
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
import Participants from "./components/admin/Participants";
import Courses from "./components/Course/Courses";
import Forum from "./components/Forum/Forum";
import CourseDashboard from "./components/Course/CourseDashboard";
import ModuleContent from "./components/Course/ModuleContent";
import LessonDetail from "./components/Course/LessonDetail";
import QuizDetail from "./components/Course/QuizDetail";
import ResultQuiz from "./components/Course/ResultQuiz";
import AddCourse from "./components/admin/AddCourse";
import AddQuiz from "./components/admin/AddQuiz";

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
          path="courses"
          element={
            <PrivateRoute>
              <Courses />
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
          path="courses/:courseId"
          element={
            <PrivateRoute>
              <CourseDashboard />
            </PrivateRoute>
          }
        />
        <Route 
          path="forum"
          element={
            <PrivateRoute>
              <Forum />
            </PrivateRoute>
          }
        />
        {/* <Route path="home-admin" exact={true} element={<DefaultHome />} /> */}
        {/* <Route path="default-home" exact={true} element={<DefaultHome />} /> */}
        <Route path="manage-course"  exact={true} element={<ManageCourse />} />
        <Route path="manage-quiz"  exact={true} element={<ManageQuiz />} />
        <Route path="edit-course" exact={true} element={<EditCourse />}/>
        <Route path="edit-quiz" exact={true} element={<EditQuiz />}/>
        <Route path="edit-detail-quiz" exact={true} element={<EditDetailQuiz/>}/>
        <Route path="edit-detail-course" exact={true} element={<EditDetailCourse />}/>
        <Route path="participants" exact={true} element={<Participants/>}/>
        {/* <Route path="course-dashboard" exact={true} element={<CourseDashboard/>}/> */}
        <Route path="module-content" exact={true} element={<ModuleContent/>}/>
        <Route path="lesson-detail" exact={true} element={<LessonDetail/>}/>
        <Route path="quiz-detail" exact={true} element={<QuizDetail/>}/>
        <Route path="result-quiz" exact ={true} element={<ResultQuiz/>}></Route>
        <Route path="add-course" exact ={true} element={<AddCourse/>} />
        <Route path="add-quiz" exact ={true} element={<AddQuiz/>} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
