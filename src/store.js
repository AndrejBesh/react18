import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import counterReducer from './slices/counterSlice'
export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(logger)
})