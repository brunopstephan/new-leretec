import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Search } from './pages/search/Search.tsx'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ path: '/search', element: <Search /> }],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>,
)
