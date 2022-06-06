import Amplify, { API, Auth } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "./context";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verifySession = async () => {
      try {
        const { username } = await Auth.currentAuthenticatedUser();
        const currentUser = await API.get("WebcsAPI", `/users/${username}`, {});
        setLoggedIn(true);
        setUser(currentUser);

        currentUser.isAdmin
          ? navigate("/admin/cursos", { replace: true })
          : navigate("/", { replace: true });
      } catch (err) {
        console.error(err);
      }
    };

    verifySession();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, user, setUser }}>
      <Outlet />
    </AuthContext.Provider>
  );
}

export default App;
