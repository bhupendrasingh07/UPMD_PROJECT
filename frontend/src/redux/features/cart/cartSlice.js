import { createSlice } from "@reduxjs/toolkit";
// import authSlice from "./features/auth/authSlice";

const initialState={
    packageDetails:[]
}

//Cart Slice
const cartSlice=createSlice({
    name:"allCart",
    initialState,
    reducers:{
        //add to cart
        addToCart:(state,action)=>{
            
           state.packageDetails=action.payload;
           
        },

        //remove particular item
        removeToCart:(state,action)=>{},

        //remove single item
        removeSingleItems:(state,action)=>{},

        //clear cart
        emptycartItem:(state,action)=>{
            state.carts=[]
        }
    }
})

export const {addToCart}=cartSlice.actions
export default cartSlice
