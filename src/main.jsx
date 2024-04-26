import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import SingUp from './Components/Register.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import AuthProvaider from './Components/Provaider/AuthProvaider.jsx';
import Register from './Components/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/Login",
        element:<Login></Login>
      },
      {
        path:"/Register",
        element:<Register></Register>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvaider>
     <RouterProvider router={router} />
     </AuthProvaider>
  </React.StrictMode>,
)
