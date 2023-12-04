import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// טעינת המודולים של של הניווט
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import { Custemer } from './compnents/custemer.jsx';
import { Custemers } from './compnents/custemers.jsx';
import { Stastics } from './compnents/statistics.jsx';
import { Main } from './compnents/main.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [{
      path: 'custemers',
      Component: Custemers,
      children: [{
        // חלק שמשתנה. כל פעם יהיה מזהה אחר
        path: ':custemerID',
        Component: Custemer,
      }]
    }, {
      path:'custemer/:custemerID',
      Component:Custemer
    }, {
      path: '',
      Component: Main,
    },{
      path:'Stastics',
      Component:Stastics
    }],
    errorElement: <p> oops :( not exists... </p>,
  }, 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)





