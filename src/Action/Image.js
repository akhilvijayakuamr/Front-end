import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
import Get from '../Action/Get'
const Image_validate = () => {

    const {Get_data}=Get()
    const navigate=useNavigate()
  
    const img_validate = async (file) => {
      if (file){
          const raw_token=Cookies.get('UserCookie')
          const token=JSON.parse(raw_token)
          const formData = new FormData();
          formData.append('image', file);
          try{
              const response = await axios.patch("http://127.0.0.1:8000/image_uploade/",formData,{
                  headers:{
                      'Authorization':`Bearer ${token.access}`,
                      'Content-Type': 'multipart/form-data'
                  }
              })
  
              if (response.status===200){
  
                  console.log(response.data)
                  Get_data("http://127.0.0.1:8000/dashboard/")
                  toast.success("Image Update succesfully")
              }
          }catch(error){
              console.log(error)
              toast.warning(error)
          }
      }
  
    };
  
    return { img_validate };
  };

  export default Image_validate