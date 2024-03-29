import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Search } from './pages/search/Search.tsx'
import { ThemeProvider } from '@/components/ThemeProvider.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ path: '/search', element: <Search /> }],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ThemeProvider>,
)
