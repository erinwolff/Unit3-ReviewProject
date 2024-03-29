import { configureStore } from "@reduxjs/toolkit";
import api from './api'
import authReducer from '../features/Auth/authSlice'
import userReducer from '../features/Account/profileSlice'
import postReducer from '../features/Posts/postSlice'

// the store is the main hub for all of our data(slices) and it's going to be the container
// of all our reducers and middleware. 

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    user: userReducer,
    post: postReducer
    //Slices go here ^
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export default store