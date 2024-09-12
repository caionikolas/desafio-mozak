import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import CreateEvent from './Pages/Auth/Register'
import Login from './Pages/Auth/Login'

export default function App() {

  return <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>

            <Route path='/create-event' element={<CreateEvent/>}/>

            <Route path='/login' element={<Login/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
}
