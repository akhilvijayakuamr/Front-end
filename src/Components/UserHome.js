import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { addUser } from '../Redux/UserSlice';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import Get from '../Action/Get';

const UserHome = () => {
  const navigate = useNavigate()
  const user = useSelector((state, action)=>state.user_data.user)
  const {Get_data} = Get()
  const {username, email} = user
  const handleEdit=()=>{
        navigate('/edituser')
  }

 

 
  return (
    <>
    <Header/>
      <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Profile"
            />
            <div className="card-body">
              <h5 className="card-title">{username}</h5>
              <button onClick={handleEdit} className='btn btn-primary'>Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default UserHome;