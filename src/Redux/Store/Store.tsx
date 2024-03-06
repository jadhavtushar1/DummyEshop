import { configureStore } from '@reduxjs/toolkit'
import getProductsReducer from '../Slices/CardSlice'
import addCartDataReducer from '../Slices/CartSlice'
// ...

const store = configureStore({
  reducer: 
    {
      allData :getProductsReducer,
      cartData : addCartDataReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch