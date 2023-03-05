import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";

import Home from './routes/Home';
import Recipes from "./routes/Recipes";
import MealPlan from "./routes/MealPlan";
import Groceries from './routes/Groceries';
import Insights from './routes/Insights';
import Preferences from './routes/Preferences';
import ErrorPage from './routes/ErrorPage';
import AppHome from './routes/AppHome';
import Login from './routes/Login';
import MainNavigation from './components/MainNavigation';
import Register from './routes/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


const AppRouter = () => {
  return (
    <div>
      <MainNavigation/>
      <BrowserRouter>  
        <Routes>
          <Route path="/" index element={<Home/>}/>
          <Route path="app-home" element={<AppHome/>}/>
          <Route path="recipes" element={<Recipes/>} />
          <Route path="plan" element={<MealPlan/>} />
          <Route path="groceries" element={<Groceries/>} />
          <Route path="insights" element={<Insights/>} />
          <Route path="preferences" element={<Preferences/>} />
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;

