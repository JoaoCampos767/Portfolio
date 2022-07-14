import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './componente/Layout'
import Sidebar from './componente/Sidebar'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/" element={<Sidebar />} />
      </Routes>
    </>
  )
}

export default App
