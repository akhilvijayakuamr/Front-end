import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import AdminSlice from "./AdminSlice";


const appStore = configureStore({
    reducer:{
        user_data:UserSlice,
        admin_data:AdminSlice
    }
})


export default appStore