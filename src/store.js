import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import counterReducer from './slices/counterSlice'
import todosReducer from './slices/todosSlice'
import postReducer from './slices/postsSlice'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todosReducer,
        posts: postReducer
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(logger)
})