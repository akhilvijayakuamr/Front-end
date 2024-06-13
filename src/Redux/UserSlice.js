
import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:"user_data",
    initialState:{
        user:'',
        user_details:{},
    },
    reducers:{
        addUser: (state, action)=>{
            state.user=action.payload
        },

        addUserDetails:(state, action)=>{
            state.user_details=action.payload
        }
    }

});

const {addUser, addUserDetails} = UserSlice.actions;

export{
    addUser,
    addUserDetails
}

export default UserSlice.reducer