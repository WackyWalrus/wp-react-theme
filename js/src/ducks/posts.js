import api from '../utilities/api'

const defaultState = {
  fetching: false,
  data: []
}

const FETCHING = 'wp/posts/FETCHING'
const SET = 'wp/posts/SET'

export default function reducer (state = defaultState, action = {}) {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: action.status
      }

    case SET:
      return {
        ...state,
        fetching: false,
        data: action.data
      }

    default:
      return state
  }
}

export function fetching (status = true) {
  return {
    type: FETCHING,
    status: status
  }
}

export function set (data) {
  return {
    type: SET,
    data: data
  }
}

export function get (data) {
  return function (dispatch) {
    dispatch(fetching())
    return api.posts.get()
  }
}