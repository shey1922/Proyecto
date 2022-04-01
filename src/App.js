import React, { useState } from "react";

import Amplify from "aws-amplify";

import awsExports from "./aws-exports";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

Amplify.configure(awsExports);

function App() {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default App;
