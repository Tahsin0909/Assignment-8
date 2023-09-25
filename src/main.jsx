import React from 'react'
import ReactDOM from 'react-dom/client'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import './index.css'

import Home from './Components/Home/Home';

import Donation from './Components/Donation/Donation';
import Statistics from './Statistics/Statistics';

import HomeOthers from './Components/HomeOthers/HomeOthers';
import Details from './Components/Details/Details';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        loader: () => fetch('../data.json'),
        element: <HomeOthers></HomeOthers>
      },

      {
        path: '/donation',
        element: <Donation></Donation>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'/:id',
        loader: () => fetch('../data.json'),
        element: <Details></Details>
      }
    ]

  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
