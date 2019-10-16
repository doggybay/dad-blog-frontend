import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//components
import TopNav from './components/layout/TopNav'
import PostsList from './components/posts/PostsList'
import User from './components/users/User'

//actions
import { fetchAllPosts } from './store/posts/actions'
import { fetchAllUsers } from './store/users/actions'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllPosts())
    dispatch(fetchAllUsers())
  })
  return (
    <Router>
      <div className="App">
        <TopNav />
        <User />
        {'App Here'}
      </div>
    </Router>
  );
}

export default App;
