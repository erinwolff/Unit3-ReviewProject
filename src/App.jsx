import './App.css'
import {Route, Routes} from 'react-router-dom'
import Posts from './features/Posts'
import Login from './features/Login'
import Navbar from './layout/Navbar'

function App() {
 

  return (
    <>
    <h1>Hello World</h1>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/posts' element={<Posts/>}/>
    </Routes>
    </>
  )
}

export default App
