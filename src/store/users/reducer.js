import { GET_ALL_USERS_PENDING, GET_ALL_USERS_FAILED, GET_ALL_USERS_SUCCESS } from './constants'

let initialState = {
  all: [],
  err: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS_PENDING:
      return state
    
    case GET_ALL_USERS_SUCCESS:
      return { ...state, all: [...state.all, action.payload] }
    
    case GET_ALL_USERS_FAILED:
      return { ...state, err: action.payload }
    
    default:
      return state
  }
}