import { createSlice } from "@reduxjs/toolkit";
import api from '../../store/api'

// api injection 
const postApi = api.injectEndpoints({
  endpoints: (builder) => ({
    fetchPosts: builder.query({
      query: () => '/posts'
    })
  })
})

export const {useFetchPostsQuery} = postApi


// create the slice

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: []
  },
  reducers: {
    setPost: (state, action) => {
      return action.payload
    }
  }

})

export default postSlice.reducer
export const {setPost}  = postSlice.actions