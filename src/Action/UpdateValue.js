
import { toast } from "react-toastify";
import Cookies from "js-cookie"
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser, addUserDetails } from "../Redux/UserSlice";
import { useNavigate } from "react-router-dom";

const useUserUpdate = () => {
    
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const userUpdate =async(username,email,id)=>{
       
        const isUsername = /^[A-Za-z][A-Za-z\s-]*$/.test(username);
        const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

        if (!isUsername){
            toast.warning("please enter valid username")
            return ;
        } 
        else if (!isEmail) {
            toast.warning("Please enter valid Email")
            return ;

        }
           
        

        try{
            const raw_token=Cookies.get('UserCookie')
            const token=JSON.parse(raw_token)
        
            const formData= new FormData();
            formData.append("username",username)
            formData.append("email",email)
            formData.append("id",id)

            if (token){
                const response = await axios.patch("http://127.0.0.1:8000/updateUser/",formData,{
                    header:{
                        'Authorization':`Bearer ${token.access}`,
                        "Content-Type": "application/json",
    
                    }
                })
                if (response.status===200){
                    console.log(response.data)
                    dispatch(addUserDetails(response.data))
                    dispatch(addUser(response.data))
                    navigate('/userHome')
                    toast.success('User details updated successfully');
                }
            }else{

                toast.warning("Something is wrong. Please log in again")
            }

            

        }catch(error){
         
            console.log(error)
        }
        




    };


    return {userUpdate}
     

}

export default useUserUpdate;
