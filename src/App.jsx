import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Layout from './Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Route>
    </Routes>
  )
}

export default App
