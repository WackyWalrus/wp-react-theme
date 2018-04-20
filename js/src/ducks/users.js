import api from '../utilities/api'

const defaultState = {
  fetching: false,
  data: {}
}

const FETCHING = 'wp/users/FETCHING'
const SET = 'wp/users/SET'
const APPEND = 'wp/users/APPEND'

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

    case APPEND:
      return {
        ...state,
        fetching: false,
        data: {
          ...state.data,
          ...action.data
        }
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

export function append (data) {
  return {
    type: APPEND,
    data: data
  }
}

export function get (params = {}) {
  return function (dispatch) {
    dispatch(fetching())
    return api.users.get(params)
  }
}