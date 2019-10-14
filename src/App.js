import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//components
import TopNav from './components/layout/TopNav'
import PostsList from './components/posts/PostsList'

//actions
import { fetchAllPosts } from './store/posts/actions'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllPosts())
  })
  return (
    <Router>
      <div className="App">
        <TopNav />
        <PostsList />
        {'App Here'}
      </div>
    </Router>
  );
}

export default App;
