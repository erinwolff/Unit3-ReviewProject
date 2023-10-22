import React from 'react'
import { useFetchPostsQuery } from './postSlice'

function Posts() {
  const { data, error, isLoading } = useFetchPostsQuery();
  
 
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <>
      <div className='posts-container'>
        {
          data.data.posts.map((post) => {
            return <div key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <p>{post.location}</p>
              <p>Posted By: {post.author.username}</p>
              <p>Will Deliver? {post.willDeliver ? "Yes" : "No"}</p>
            </div>
          })
        }
      </div>
    </>
  )
}

export default Posts

