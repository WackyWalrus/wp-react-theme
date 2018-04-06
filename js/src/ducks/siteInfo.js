import api from '../utilities/api'

const defaultState = {}

const FETCH = 'wp/siteInfo/FETCH'

export default function reducer (state = defaultState, action = {}) {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        ...action.data
      }

    default:
      return state
  }
}

export function get (data) {
  return function (dispatch) {
    return api.siteInfo.get()
      .then(response => {
        console.log(response)
      })
  }
}