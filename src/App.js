import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { LOGIN } from "./constants/routes"; // Import LOGIN directly
const Login = lazy(() => import("./pages/Login/login"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={LOGIN} element={<Login />} /> {/* Use LOGIN directly */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
