import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { addAdmin } from '../Redux/AdminSlice'


function AdminHeader() {
    const dispatch = useDispatch()
    const user = useSelector((state, action)=>state.admin_data.admin)
    const navigate = useNavigate()
    const handleLogout=()=>{
        dispatch(addAdmin(null))
        Cookies.remove("AdminCookie")
        navigate('/admin')
    }
  return (
    <header className="bg-light py-2" >
    <div className="container d-flex justify-content-between align-items-center">
      <h1 className="h6">Admin Home</h1>
      <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
    </div>
  </header>
  )
}

export default AdminHeader
