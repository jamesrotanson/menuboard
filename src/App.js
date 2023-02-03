import React from 'react';
import './App.css'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import AppRouter from './AppRouter';
import MainNavigation from './components/MainNavigation';
import "@fontsource/inter";
import "@fontsource/inter/700.css"
import "@fontsource/inter/500.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



const App = () => {
  return (
    <div className='App-container'>
      <MainNavigation/>
      <AppRouter/>
    </div>
  );
};

export default App;

