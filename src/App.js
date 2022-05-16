import React, { useEffect, useState } from "react";

import Amplify, { Auth, API } from "aws-amplify";

import awsExports from "./aws-exports";
import Navbar from "./components/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import { AuthContext } from "./context";

Amplify.configure(awsExports);

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setSetAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(session => {
        setLoggedIn(true);
        navigate('/', { replace: true });
      })
      .catch(err => setLoggedIn(false))
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {loggedIn && <Navbar />}
      <Outlet />
      {loggedIn && <Footer />}
    </AuthContext.Provider>
  );
}

export default App;
