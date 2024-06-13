import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Updatevalue from '../Action/UpdateValue';
import Get from '../Action/Get'

function UpdateUser() {

  const data = useSelector((state, action)=>state.user_data.user_details)
  const {username, email, id} = data
  const [Username, setUsername] = useState(username)
  const [Email, setEmail] = useState(email)
  const {UserUpdate} = Updatevalue
  const {Get_data} = Get()
  console.log(username)


  useEffect(()=>{
    Get_data("http://127.0.0.1:8000/dashboard/")
  },[])


  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  };


  const handleSubmit = (e) => {

    e.preventDefault();
    console.log("kgjsafgfashfsajgfasdfkjgsajkfsagdf")
    console.log(Username, Email)
   
   if (Username && Email){
     console.log("update")
     UserUpdate(Username,Email,id)

   }
   else{
      toast.warning("Enter valid User details")
   }
   
}



  return (
    <div className="container mt-5">
      <h1>Update Data</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Username</label>
          <input
            type="text"
            onChange={handleChange}
            className="form-control"
            id="name"
            value={username}
            name="username"
    
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            onChange={handleChange}
            className="form-control"
            id="email"
            value={email}
            name="email"
    
          />
        </div>
        <button type="submit"  className="btn btn-primary">Update Data</button>
      </form>
    </div>
  )
}

export default UpdateUser
