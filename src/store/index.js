import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import postsReducer from './posts/reducer'
import usersReducer from './users/reducer'

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer
})

const middleware = [thunk, logger]

export default createStore(rootReducer, applyMiddleware(...middleware))