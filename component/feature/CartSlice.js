import { createSlice } from "@reduxjs/toolkit";

const initialState=[];
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    removeCartItem(state,action){
       return state.filter(item => item.id !== action.payload);
    },

  }
});
export const {addProduct,removeCartItem}=CartSlice.actions;
export default CartSlice.reducer;