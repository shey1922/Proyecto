import React, { useState, useEffect } from "react";

import Amplify, { Hub } from "aws-amplify";

import awsExports from "./aws-exports";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { AuthContext } from "./context";

Amplify.configure(awsExports);

function App() {

  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    Hub.listen('auth', (event) => {
      console.log('auth event', event);
      //setCurrentUser(event.payload.data);
    });
  });

  return (
    <AuthContext.Provider value={{currentUser, setCurrentUser}}>
      {currentUser && <Navbar />}
      <Outlet />
      {currentUser && <Footer />}
    </AuthContext.Provider>
  );
}

export default App;
