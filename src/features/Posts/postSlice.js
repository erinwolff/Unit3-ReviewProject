import { createSlice } from "@reduxjs/toolkit";
import api from '../../store/api'

// api injection 
const postApi = api.injectEndpoints({
  endpoints: (builder) => ({
    fetchPosts: builder.query({
      query: () => '/posts'
    }),
    addPosts: builder.mutation({
      query: ({ title, description, price, location, willDeliver }) => ({
        url: '/posts',
        method: 'POST',
        body: { post: { title, description, price, location, willDeliver } },
      }),
      transformResponse: (response) => response.data,
    })
  })
})

export const { useFetchPostsQuery, useAddPostsMutation } = postApi


// create the slice

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
  },
  reducers: {
    setPost: (state, action) => {
      return action.payload
    }
  }

})

export default postSlice.reducer
export const { setPost } = postSlice.actions