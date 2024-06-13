import axios from 'axios';
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux';
import Cookies from "js-cookie";
import { addUserDetails } from "../Redux/UserSlice";
import { addAdminDetails } from '../Redux/AdminSlice';

const Get = () => {
    const dispatch = useDispatch();

    const Get_data = async (Urls, admin = false) => {
        let token;
        let raw_token

        if (!admin) {
            raw_token=Cookies.get('UserCookie')
            token=JSON.parse(raw_token)
        } else {
            raw_token=Cookies.get('AdminCookie')
            token=JSON.parse(raw_token)
        }

        if (token) {
            console.log("Token:", token);  // Log the token
            console.log("URL:", Urls);     // Log the URL

            try {
                const response = await axios.get(Urls, {
                    headers: {
                        'Authorization': `Bearer ${token.access}`,
                        'Content-Type': 'application/json'
                    }
                });

                console.log("Response:", response);  // Log the response

                if (response.status === 200) {
                    if (admin) {
                        console.log(response.data, "admin side");
                        dispatch(addAdminDetails(response.data));
                    } else {
                        console.log(response.data[0], "get method");
                        dispatch(addUserDetails(response.data[0]));
                    }
                } else {
                    console.error("Unexpected response status:", response.status);
                    toast.error("Failed to fetch data");
                }
            } catch (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.error("Error response data:", error.response.data);
                    console.error("Error response status:", error.response.status);
                    console.error("Error response headers:", error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error("Error request data:", error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.error("Error message:", error.message);
                }
                toast.error("Failed to fetch data");
            }
        } else {
            console.error("Token not found");
            toast.error("Authentication token not found");
        }
    };

    return { Get_data };
};

export default Get;
