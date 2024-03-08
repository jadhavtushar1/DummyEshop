import { configureStore } from '@reduxjs/toolkit'
import getProductsReducer from '../Slices/CardSlice'
import addCartDataReducer from '../Slices/CartSlice'
import authReducer from '../Slices/AuthinticateSlice'
// ...

const store = configureStore({
  reducer: 
    {
      allData :getProductsReducer,
      cartData : addCartDataReducer,
      authData : authReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch