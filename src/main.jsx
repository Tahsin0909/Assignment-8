import React from 'react'
import ReactDOM from 'react-dom/client'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import './index.css'

import Home from './Components/Home/Home';

// import Statistics from './Statistics/Statistics';

import HomeOthers from './Components/HomeOthers/HomeOthers';
import Details from './Components/Details/Details';
import Donations from './Components/Donation/Donations';
import Statistics from './Statistics/Statistics';
import ErrorPage from './Components/ErrorPage/ErrorPage';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorPage errorMessage={'The page you are looking for not available!'}></ErrorPage>,
    children: [
      {
        path: '/',
        loader: () => fetch('../data.json'),
        element: <HomeOthers></HomeOthers>
      },

      {
        path: '/donation',
        loader: () => fetch('../data.json'),
        element: <Donations></Donations>
      },
      {
        path: '/statistics',
        loader: () => fetch('../data.json'),
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
