import React from 'react';
import { Provider } from 'react-redux';
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
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
]);


// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

const store = createStore(rootReducer)

const App = () => {

  return (
    <Provider store={store}>
      <div className='App-container'>
        {/* <MainNavigation/> */}
        <AppRouter/>
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{
            className: "Toaster",
            iconTheme: {
              primary: '#009b3c',
              secondary: '#FFFAEE',
            },
          }}
        />
      </div>
    </Provider>
  );
};

export default App;

