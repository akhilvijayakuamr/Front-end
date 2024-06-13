import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { addUser } from '../Redux/UserSlice';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import Get from '../Action/Get'
import { toast } from 'react-toastify';
import Image_validate from '../Action/Image'

const UserHome = () => {
  const navigate = useNavigate()
  const {Get_data} = Get()
  const {img_validate} = Image_validate()
  const data=useSelector((state)=> state.user_data.user_details)
  const {username,email,phone,profile}=data
  console.log(profile)
  const handleEdit=()=>{
        navigate('/edituser')
  }

  useEffect(()=>{
    Get_data("http://127.0.0.1:8000/dashboard/")
  },[])


  const handleImageChange = (event) => {
    console.log("hai")
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      const allowedExtensions = /.(jpg|jpeg|png|gif|webp)$/;
      if (!allowedExtensions.test(file.name)) {
         
        toast.warning("Please upload an image file (JPEG, JPG, PNG, GIF,webp).")
        return;
      }else{
      reader.onload = (e) => {
        img_validate(file)

      };

      reader.readAsDataURL(file);
    }
    }
  };

  const imageUrl = profile ? `http://127.0.0.1:8000${profile}` : "https://via.placeholder.com/150";

 
  return (
    <>
    <Header/>
    
      <div className="container mt-5 p-5">
      <div className="row">
        <div className='col-md-4'></div>
        <div className="col-md-4">
          <div className="card">
            <img
              src={imageUrl}
              className="card-img-top p-2" 
              alt="Profile"
              style={{ width: '330px', height: '150px' }} 
            />
            <div className="card-body">
              <h5 className="card-title">{username}</h5>
              <button onClick={handleEdit} className='btn btn-primary'>Edit</button>
              <br/>
              <br/>
              <label for="formFileSm" class="form-label">Upload profile</label>
              <input class="form-control form-control-sm" id="formFileSm" type="file"  onChange={handleImageChange}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default UserHome;