import React from 'react'
import { Link } from 'react-router-dom'
import { logout, selectToken } from '../features/Auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'
// useSelector gets us the data from the state
// useDispatch gets us the action from the state
import { useNavigate } from 'react-router-dom'



function Navbar() {
  const token = useSelector(selectToken)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    dispatch(logout())
    navigate('/login')
  }


  return (
    <>
      <nav>
        <h1>Market Place</h1>
        <ul>
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
          {
            token ? (
              <>
                <li>
                  <Link to='/profile'>Profile</Link>
                </li>
                <li>
                  <a onClick={handleSubmit}>Logout</a>
                </li>
              </>)
              : (
                <>
                  <li>
                    <Link to='/login'>Login</Link>
                  </li>

                </>
              )
          }
        </ul>
      </nav></>
  )
}

export default Navbar