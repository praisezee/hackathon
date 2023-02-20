import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Login from './components/Login'
import Missing from './components/Missing'
import Request from './components/Request'
import Signup from './components/Signup'
import Layout from './Layout'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Signup/>}/>
        <Route path='dashboard' element={<Request/>}/>
        <Route path='contact-us' element={<Request/>}/>
        <Route path='*' element={<Missing/>}/>
      </Route>
    </Routes>
  )
}

export default App
