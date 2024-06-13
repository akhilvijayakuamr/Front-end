import axios from 'axios';
import Get from '../Action/Get'
import React from 'react';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';  // Correct import syntax
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../Redux/UserSlice';
import { addAdmin } from '../Redux/AdminSlice';
import { useNavigate } from 'react-router-dom';  // useHistory for navigation

function Login() {
    const navigate = useNavigate();  // Use useHistory instead of useNavigate
    const dispatch = useDispatch();
    const {Get_data} = Get()
    

    const get_token = async (email, password, admin = false) => {
        const data = {
            email: email,
            password: password
        };
        console.log(data)

        try {
            const response = await axios.post("http://127.0.0.1:8000/token/", data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(response.data);  // Correctly access response.data

            if (response.status === 200) {
                const token = response.data.token;
                if (!admin) {
                    const token =JSON.stringify(response.data)
                    Cookies.set("UserCookie",token,{expires:30})
                    const decoded =jwtDecode(response.data.access)

                    if (decoded.role) {
                        toast.warning("Not allowed in super user, only allowed in users");
                        console.log("not admin");
                    } else {
                        dispatch(addUser(decoded));
                        navigate('/userHome');  // Navigate to userHome
                        toast.success("Signed in successfully");
                    }
                } else {
                    const token =JSON.stringify(response.data)
                    Cookies.set("AdminCookie",token,{expires:30})
                    const decoded =jwtDecode(response.data.access)

                    if (!decoded.role) {
                        toast.warning("Not allowed in User, only allowed in super user");
                    } else {
                        dispatch(addAdmin(decoded));
                        Get_data("http://127.0.0.1:8000/admin_dashboard/",true)
                        console.log("Admin successfully added");
                        navigate('/adminHome');  // Navigate to adminHome
                        toast.success('Signed in successfully');
                    }
                }
            }
        } catch (error) {
            console.error("Error occurred during login:", error);
            toast.error("Failed to sign in. Please try again.");
        }
    };

    return { get_token };
}

export default Login;
