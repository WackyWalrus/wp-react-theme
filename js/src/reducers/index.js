import { combineReducers } from 'redux'

import siteInfo from '../ducks/siteInfo.js'
import posts from '../ducks/posts.js'

const rootReducer = combineReducers({
  siteInfo: siteInfo,
  posts: posts
})
export default rootReducer