import { GET_ALL_USERS_PENDING, GET_ALL_USERS_FAILED, GET_ALL_USERS_SUCCESS } from './constants'
import axios from 'axios'

export const fetchAllUsers = () => {
  return dispatch => {
    dispatch({
      type: GET_ALL_USERS_PENDING
    })

    axios.get('http://localhost:8000/api/users')
      .then(res => {
        dispatch({
          type: GET_ALL_USERS_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: GET_ALL_USERS_FAILED,
          payload: err
        })
      })
  }
}