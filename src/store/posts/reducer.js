import { GET_ALL_POSTS_PENDING, GET_ALL_POSTS_FAILED, GET_ALL_POSTS_SUCCESS } from './constants'

let initialState = {
  all: [],
  err: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS_PENDING:
      return state
    
    case GET_ALL_POSTS_SUCCESS:
      return { ...state, all: action.payload }
    
    case GET_ALL_POSTS_FAILED:
      return { ...state, err: action.payload }
    
    default:
      return state
  }
}