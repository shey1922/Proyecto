import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Course from "./components/Course";
import Home from "./components/Home";
import Login2 from "./components/Login2";
import Register2 from "./components/Register2";
import Teachers from "./components/Teachers";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<Home />} />
        <Route path="login" element={<Login2 />} />
        <Route path="register" element={<Register2 />} />
        <Route path="about" element={<About />} />
        <Route path="course" element={<Course />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
