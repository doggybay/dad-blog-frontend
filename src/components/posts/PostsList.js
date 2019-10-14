import React from 'react'
import { useSelector } from 'react-redux'

const PostsList = () => {
  const posts = useSelector(state => state.posts.all)
  console.log("posts: ", posts)
  return (
    <div>
    
    </div>
  )
}

export default PostsList