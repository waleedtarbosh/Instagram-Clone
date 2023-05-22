import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { LOGIN } from "./constants/routes"; 
import { SIGN_UP } from "./constants/routes"; 
import { PROFILE } from "./constants/routes";
const Login = lazy(() => import("./pages/Login/Login"));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const Profile = lazy(() => import('./pages/Profile/Profile'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path={LOGIN} element={<Login />} />
          <Route path={SIGN_UP} element={<SignUp />} />
          <Route path={PROFILE} element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;