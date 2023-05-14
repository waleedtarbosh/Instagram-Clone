import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { LOGIN } from "./constants/routes"; 
import { SIGN_UP } from "./constants/routes"; 
const Login = lazy(() => import("./pages/Login/Login"));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={LOGIN} element={<Login />} />
          <Route path={SIGN_UP} element={<SignUp></SignUp>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;