import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'

import Root from './views'
import ViewProductPage from './views/products/ViewPage'
import EditProductPage from './views/products/EditPage'
import WrappedPage from './views/WrappedPage'

import configureStore from './store'
const store = configureStore()

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
   {
      path: '/',
      element: <WrappedPage element={<Root />} />,
   },
   {
      path: 'product/:id',
      element: <WrappedPage element={<ViewProductPage />} />,
   },
   {
      path: 'product/:id/edit',
      element: <WrappedPage element={<EditProductPage />} />,
   },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <Provider store={store}>
         <RouterProvider router={router} />
      </Provider>
   </React.StrictMode>,
)
