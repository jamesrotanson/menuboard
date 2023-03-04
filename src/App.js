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
import rootReducer from './reducers'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
]);

const firebaseConfig = {
  apiKey: "AIzaSyAb0WoTNyWqlV2fluoipNPQrJcdrXZ2SQo",
  authDomain: "menuboard-2528d.firebaseapp.com",
  projectId: "menuboard-2528d",
  storageBucket: "menuboard-2528d.appspot.com",
  messagingSenderId: "470937298328",
  appId: "1:470937298328:web:1e53386638451f0c65b7ed",
  measurementId: "G-38S7D1XJHN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

const store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={store}>
      <div className='App-container'>
        <MainNavigation/>
        <AppRouter/>
      </div>
    </Provider>
  );
};

export default App;

