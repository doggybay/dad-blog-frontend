import { GET_ALL_POSTS_PENDING, GET_ALL_POSTS_FAILED, GET_ALL_POSTS_SUCCESS } from './constants'
import axios from 'axios'

export const fetchAllPosts = () => {
  return dispatch => {
    dispatch({
      type: GET_ALL_POSTS_PENDING
    })

    axios.get('http://localhost:8000/api/posts')
      .then(res => {
        dispatch({
          type: GET_ALL_POSTS_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: GET_ALL_POSTS_FAILED,
          payload: err
        })
      })
  }
}