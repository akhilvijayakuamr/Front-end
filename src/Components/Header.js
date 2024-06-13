import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../Redux/UserSlice'
import Cookies from 'js-cookie'

function Header() {
    const dispatch = useDispatch()
    const user = useSelector((state, action)=>state.user_data.user)
    const navigate = useNavigate()
    const handleLogout=()=>{
        dispatch(addUser(null))
        Cookies.remove("UserCookie")
        navigate('/')
    }
  return (
    <header className="bg-light py-2" >
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h6">User Home</h1>
        <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
      </div>
    </header>
  )
}

export default Header
