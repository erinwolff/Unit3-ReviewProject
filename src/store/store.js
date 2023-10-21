import { configureStore } from "@reduxjs/toolkit";
import api from './api'
import authReducer from '../features/Auth/authSlice'

// the store is the main hub for all of our data(slices) and it's going to be the container
// of all our reducers and middleware. 

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer
    //Slices go here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export default store