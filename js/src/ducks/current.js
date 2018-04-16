import api from '../utilities/api'

const defaultState = {
  fetching: false,
  type: '',
  data: {}
}

const FETCHING = 'wp/current/FETCHING'
const SET = 'wp/current/SET'

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
        data: action.data,
        type: action.dataType
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

export function set (data = {}, type = '') {
  return {
    type: SET,
    data: data,
    dataType: type
  }
}
