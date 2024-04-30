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
import Allsoptview from './Components/Allsoptview.jsx';
import Mydatalist from './Components/Mydatalist.jsx';
import UpdateSpot from './Components/UpdateSpot.jsx';
import Country from './Components/Country.jsx';

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
        loader:()=> fetch('https://n-gamma-sand.vercel.app/addspots')
      },
      {
        path:"/viewdata/:id",
        element: <PrivetRout><VIewditels></VIewditels></PrivetRout>,
        loader: ()=>fetch("https://n-gamma-sand.vercel.app/addspots")
      },
      {
        path:"/allspotview/:id",
        element: <PrivetRout><Allsoptview></Allsoptview></PrivetRout>,
        loader: ()=>fetch("https://n-gamma-sand.vercel.app/addspots")
      },
      {
        path:"/MyList",
        element: <PrivetRout><Mydatalist></Mydatalist></PrivetRout>,
        loader: ()=>fetch("https://n-gamma-sand.vercel.app/addspots")
      },
      {
        path:"/UpdateSpot/:id",
        element:<PrivetRout><UpdateSpot></UpdateSpot></PrivetRout>,
        loader:({params})=> fetch(`https://n-gamma-sand.vercel.app/addspots/${params.id}`)
      },
      {
        path:"/country",
        element:<Country></Country>,
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
