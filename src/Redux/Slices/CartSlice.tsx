import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CardProps {
    
      id: number;
      title: string;
      description: string;
      price: number;
      discountPercentage: number;
      rating: number;
      stock: number;
      brand: string;
      category: string;
      thumbnail: string;
      images: string[];
      cartItemId?: number; // Set data prop to any type
   
  }
  export interface cartState {
    data :CardProps[],
  }
  export const initialState : cartState = {
    data:[]
  }

const cartSlice = createSlice({
    name : 'cartSlice',
    initialState,
    reducers:{
        addToCart :(state,action :  PayloadAction<CardProps>)=>{
            state.data.push({...action.payload}) 
            console.log(action.payload)
        }
    }
})
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer