import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from '../pages/Home.jsx'
import Products from '../pages/Products.jsx'
import ProductPage from '../pages/Product.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'
import Checkout from '../pages/Checkout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage/>
  },
  {
    path: '/products',
    element: <Products />,
    errorElement: <ErrorPage/>
  },
  {
    path: '/products/:id',
    element: <ProductPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/checkout',
    element: <Checkout />,
    errorElement: <ErrorPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
