import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import * as ROUTES from './constants/routes'
import Layout from "./Components/Layout/Layout";
import Loader from "./Components/Loader/Loader";

const Login = lazy(() => import("./pages/Login/Login"));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const MyProfile = lazy(() => import('./pages/MyProfile/MyProfile'));
const FriendsProfile = lazy(() => import('./pages/FriendsProfile/FriendsProfile'));
const Settings = lazy(() => import('./pages/Settings/Settings'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
            <Route element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path={ROUTES.PROFILE} element={<MyProfile />} />
              <Route path={ROUTES.FRIENDS_PROFILE} element={<FriendsProfile />} />
              <Route path={ROUTES.SETTINGS} element={<Settings />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;