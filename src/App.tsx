import { AuthenticatedApp } from "authenticated-app";
import { useAuth } from "context/auto-index";
import React from "react";
import { UnauthenticatedApp } from "screens/unauthenticated-app";
import "./App.css";

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
