import React from 'react'
import { useSelector } from 'react-redux'

import Post from './Post'

const PostsList = () => {
  const posts = useSelector(state => state.posts.all)
  const users = useSelector(state => state.users.all)

  let listOfPosts = posts.map((post) => {
    console.log('posts in list: ', post)
    return (<Post post={post} />)
  })
  console.log('list: ', listOfPosts)
  return (
    <div>
      {listOfPosts}
    </div>
  )
}

export default PostsList