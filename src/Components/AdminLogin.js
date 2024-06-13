
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import Login from '../Action/Login'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {

  const [erroeMessage, setErrorMessage] = useState('')
  const email = useRef()
  const password = useRef()
  const {get_token} = Login()
  const user = useSelector((state)=>state.User_data)

  const handleLogin = async()=>{
    const Error = await get_token(email.current.value, password.current.value, true)
  }
  return (
    <div className="container p-5" style={{"backgroundColor":"teal"}}>
    <div className="row justify-content-center p-5">
      <div className="col-md-6 p-5">
        <div className="card">
          <div className="card-header mt-3"><div>
          
      </div>
            <h3 className="text-center">Admin Login</h3>
          </div>
          <div className="card-body">
            <form onSubmit={(e)=>e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="username">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  ref={email}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  ref={password}
                  required
                />
              </div>
              <button type="submit" onClick={handleLogin} className="btn btn-primary btn-block mt-3">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AdminLogin
