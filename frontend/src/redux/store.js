import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import cartSlice from "./features/cart/cartSlice";
 
const store=configureStore({
    reducer:{
        auth:authSlice.reducer,
        allCart:cartSlice.reducer,
    }

})
export default store;

