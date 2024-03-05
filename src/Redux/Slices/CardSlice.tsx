import axios from "axios";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
const parentURL : string | undefined = process.env.REACT_APP_API_URL || ''

export const getAllData = createAsyncThunk("getalldata", async (query: string | undefined) => {
    let url = parentURL;
    
    if (query) {
        url += `/search?q=${query}`;
    }
    
    const response = await axios.get(url);
    
    return response.data.products;
});

interface getdata {
    data : [] | null,
    isLoading:boolean,

}
const initialState : getdata ={
    data:[],
    isLoading : false,
}

const getproductSlice = createSlice({
    name:'getproductSlice',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getAllData.fulfilled,(state,action)=>{
            state.isLoading = true
            state.data = action.payload
        })
        builder.addCase(getAllData.pending,(state,action)=>{
            state.isLoading = true
        })
        builder.addCase(getAllData.rejected,(state,action)=>{
            state.isLoading = false
            
        })
    }
})

export default getproductSlice.reducer