
import { createSlice } from "@reduxjs/toolkit";

const AdminSlice = createSlice({
    name:"admin_data",
    initialState:{
        admin:'',
        admin_details:{},
    },
    reducers:{
        addAdmin: (state, action)=>{
            state.admin=action.payload
        },

        addAdminDetails:(state, action)=>{
            state.admin_details=action.payload
        }
    }

});

const {addAdmin, addAdminDetails} = AdminSlice.actions;

export{
    addAdmin,
    addAdminDetails
}

export default AdminSlice.reducer