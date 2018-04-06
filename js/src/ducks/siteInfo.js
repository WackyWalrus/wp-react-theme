import api from '../utilities/api'

const defaultState = {
  fetching: false,
  data: {}
}

const FETCHING = 'wp/siteInfo/FETCHING'
const SET = 'wp/siteInfo/SET'

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
    return api.siteInfo.get()
  }
}