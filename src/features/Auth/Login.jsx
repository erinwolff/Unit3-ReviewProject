import React, { useState } from 'react'
import { useRegisterMutation, useLoginMutation } from './authSlice'

function Login() {
  // hooks always go to the top level of the function

  //initial states
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // data that comes from the slice
  const [login] = useLoginMutation() // hooks
  const [register] = useRegisterMutation()
  const [loading, setLoading] = useState(false)
  const [error, setError]= useState(null)

  return (
    <>
      <div>This is the login page ... </div>
    </>
  )
}

export default Login