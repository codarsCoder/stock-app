import { configureStore } from "@reduxjs/toolkit";
import persistedReducer from './authSlice'
import stockReducer from './stockSlice'

    const store = configureStore({
        reducer: {
          auth: persistedReducer,
          stock: stockReducer,
        },
})

export default store