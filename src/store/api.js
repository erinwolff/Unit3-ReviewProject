import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const COHORT = '2309-FSA-ET-WEB-FT-SF'

// this file is for the main hub for all of our api routes


export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `https://strangers-things.herokuapp.com/api/${COHORT}`
  }),
  endpoints: () => ({})
})

export default api