import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "./context";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, user, setUser }}>
      <Outlet />
    </AuthContext.Provider>
  );
}

export default App;
