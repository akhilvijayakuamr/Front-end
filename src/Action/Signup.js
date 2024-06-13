import axios from "axios";




const signup_validator = (
    username,
    email,
    password,
    conform_password,
    navigate,
)=>{
    
    const signup_value = async ()=>{
        const data = {
            username:username,
            email : email,
            password : password,
        }
    try{
        const respones = await axios.post("http://127.0.0.1:8000/signup/",
        data,
        {
            headers:{
                "Content-Type":"application/json"
            },
        }
    )
    console.log(respones.data)
    console.log(respones.status)
    if (respones.status === 200){
        console.log(respones.data)
        console.log("hai")
        navigate('/')
    }
    if(respones.status===401){
        console.log(respones.error)
    }
    }catch(error){

        console.log(error)
    }
        
    
      
    }
    
    signup_value()
}

export default signup_validator
