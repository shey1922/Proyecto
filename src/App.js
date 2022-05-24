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
  const [isAdmin, setAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verifySessionAndAdmin = async () => {
      try {
        await Auth.currentAuthenticatedUser();
        const response = await Auth.currentUserPoolUser();
        console.log(response);
        const user = await API.get('WebcsAPI', `/users/${response.username}`, {});
        setLoggedIn(true);
        setAdmin(user.isAdmin);
        navigate('/', { replace: true });
      } catch (err) {
        setLoggedIn(false);
        setAdmin(false);
      }
    }

    verifySessionAndAdmin();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, isAdmin, setAdmin }}>
      {loggedIn && !isAdmin && <Navbar />}
      <Outlet />
      {loggedIn && !isAdmin && <Footer />}
    </AuthContext.Provider>
  );
}

export default App;
