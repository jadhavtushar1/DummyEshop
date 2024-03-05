import { configureStore } from '@reduxjs/toolkit'
import getProductsReducer from '../Slices/CardSlice'
// ...

const store = configureStore({
  reducer: {alldata :getProductsReducer}
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch