import React from 'react'
import { useDispatch } from "react-redux";
import Cookies from "js-cookie"
import axios from "axios";
import {  addUserDetails } from "../Redux/UserSlice"
import { toast } from 'react-toastify';


const useUpdatevalue=()=> {
    const dispatch = useDispatch()

    const userUpdate = async(username, email, id)=>{
        const raw_token=Cookies.get('UserCookie')
        const token=JSON.parse(raw_token)
        const formData = new FormData();
        formData.append("username", username)
        formData.append("email",email)
        formData.append("id",id)
    
    console.log(formData)

    if (token){
        const respones = await axios.patch("http://127.0.0.1:8000/updateUser/",
            formData,{
                headers:{
                    'Authorization':`Bearer ${token.access}`,
                    "Content-Type": "application/json",
                }
            }
        )
        if (respones.status===200){
            console.log("This is very succes data",respones.data)
            dispatch(addUserDetails(respones.data))
            toast.success('User details updated successfully');
        }else{
            console.log("Error is cammed")
        }
    }
    }

    return{userUpdate}
}

export default useUpdatevalue
