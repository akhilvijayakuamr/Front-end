import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import signup_validator from '../Action/Signup'
import { useNavigate } from 'react-router-dom'

function AdminCreate() {

  const [errorMessage, setErrorMessage] = useState('')
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const conform_password = useRef()
  const user = useSelector((state)=>state.User_data)
  const navigate = useNavigate()



  const handleSignup = ()=>{
    signup_validator(
      username.current.value,
      email.current.value,
      password.current.value,
      conform_password.current.value,
      navigate,
      true
    )
  }
  

  return (
    <div className="container p-5" style={{"backgroundColor":"teal", "body":"teal"}}>
    <div className="row justify-content-center">
      <div className="col-md-6 ">
        <div className="card">
          <div className="card-header">
            <h3 className="text-center">Register</h3>
          </div>
          <div className="card-body">
            <form onSubmit={(e)=>e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input

                  type="text"
                  ref={username}
                  className="form-control"
                  required
                />
              </div>
             
              <div className="form-group">
                <label htmlFor="username">Email</label>
                <input
                  type="email"
                  ref={email}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Password</label>
                <input
                  type="password"
                  ref={password}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Conform password</label>
                <input
                  type="password"
                  ref={conform_password}
                  className="form-control"
                  required
                />
              </div>
              <button type="submit"  onClick={handleSignup} className="btn btn-primary btn-blockeal mt-3">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AdminCreate
