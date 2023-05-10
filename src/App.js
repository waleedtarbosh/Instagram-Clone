import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import * as ROUTES from "./constants/routes";
const Login = lazy(() => import("./pages/Login/login"));
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login></Login>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
