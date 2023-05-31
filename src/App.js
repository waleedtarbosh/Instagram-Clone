import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy,Suspense } from "react";
import * as ROUTES from './constants/routes'
import Layout from "./Components/Layout/Layout";
import Loader from "./Components/Loader/Loader";
import UserContext from "./context/user"
import useAuthListener from './hooks/use-auth-listener';
const Login = lazy(() => import("./pages/Login/Login"));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const MyProfile = lazy(() => import('./pages/MyProfile/MyProfile'));
const FriendsProfile = lazy(() => import('./pages/FriendsProfile/FriendsProfile'));
const Settings = lazy(() => import('./pages/Settings/Settings'));

function App() {
  const { user } = useAuthListener();
  return (
    <div>
      <UserContext.Provider value={{ user }}>
      <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />   
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path={ROUTES.PROFILE} element={<MyProfile />} />
            <Route path={ROUTES.FRIENDS_PROFILE} element={<FriendsProfile/>} />
            <Route path={ROUTES.SETTINGS} element={<Settings />} />
          </Route>
        </Routes>
        </Suspense>
      </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;