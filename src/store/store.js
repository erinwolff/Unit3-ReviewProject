import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import api from './api'

// the store is the main hub for all of our data(slices) and it's going to be the container
// of all our reducers and middleware. 

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    //Slices go here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export default store