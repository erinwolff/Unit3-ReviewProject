import './App.css'
import {Route, Routes} from 'react-router-dom'
import Posts from './features/Posts/Posts'
import Login from './features/Auth/Login'
import Navbar from './layout/Navbar'
import Profile from './features/Account/Profile'

function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/posts' element={<Posts/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </>
  )
}

export default App
