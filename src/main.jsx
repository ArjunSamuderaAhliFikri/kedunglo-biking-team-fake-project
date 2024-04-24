import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './Pages/Menu.jsx';
import './css/tailwind.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import KedungloBikingShop from './Pages/KedungloBikingShop.jsx';

const router = createBrowserRouter([
  {path: '/', element: <h1>halaman kosong!</h1>, errorElement: <h1>halaman anda sedang error</h1>},

  {path: '/kedunglo-biking-shop', element: <KedungloBikingShop />}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
