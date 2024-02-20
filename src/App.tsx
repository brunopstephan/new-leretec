import { Outlet } from 'react-router-dom'
import './index.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

function App() {
  return (
    <div>
      <div className="container mx-auto mt-24 p-2">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
