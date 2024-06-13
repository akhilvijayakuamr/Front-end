import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie"
import Get from '../Action/Get'


const useUser_delete=()=>{
    const {Get_data} = Get()  
 
   const user_delete  = async (id)=>{
 
     const raw_token=Cookies.get('AdminCookie')
     const ref_token=JSON.parse(raw_token)
    
     if (!ref_token){
       return ;
     }
     try{
 
       const response= await axios.delete("http://127.0.0.1:8000/userdelete/",{
         headers:{
           "Content-Type": "application/json",
           'Authorization':`Bearer ${ref_token.access}`,
   
         },
         data: { id } 
       })
       if (response.status===200){
         
         toast.success("User Deleted ")
         Get_data("http://127.0.0.1:8000/admin_dashboard/",true)
 
       }
     }catch(error){
         
       console.log(error)
     }
    
   }
 
   return {user_delete}
 }

export default useUser_delete