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
import ErrorPage from './Components/ErrorPage.jsx';
import AuthProvaider from './Components/Provaider/AuthProvaider.jsx';
import Register from './Components/Register.jsx';
import AddTouristsSpot from './Components/AddTouristsSpot.jsx';
import Spotlist from './Components/Spotlist.jsx';
import VIewditels from './Components/VIewditels.jsx';
import PrivetRout from './Components/PrivetRout.jsx';

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
      },
      {
        path:"/AddTouristsSpot",
        element:<PrivetRout><AddTouristsSpot></AddTouristsSpot></PrivetRout>
        
      },
      {
        path:"/AllTouristsSpot",
        element:<Spotlist></Spotlist>,
        loader:()=> fetch('http://localhost:5000/addspots')
      },
      {
        path:"/viewdata/:id",
        element: <PrivetRout><VIewditels></VIewditels></PrivetRout>,
        loader: ()=>fetch("http://localhost:5000/addspots")
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
