import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { count } from "console";

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
      cartItemId?: number; 
   
  }
  export interface cartState {
    data :CardProps[],
    count : number
  }
  export const initialState : cartState = {
    data:[],
    count:0
  }

const cartSlice = createSlice({
    name : 'cartSlice',
    initialState,
    reducers:{
        addToCart :(state,action :  PayloadAction<CardProps>)=>{
            state.data.push({...action.payload})
            state.count = state.data.length
        }
    }
})
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer