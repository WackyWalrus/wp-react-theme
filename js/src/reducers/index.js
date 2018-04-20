import { combineReducers } from 'redux'

import siteInfo from '../ducks/siteInfo.js'
import posts from '../ducks/posts.js'
import pages from '../ducks/pages.js'
import categories from '../ducks/categories.js'
import current from '../ducks/current.js'
import users from '../ducks/users.js'

const rootReducer = combineReducers({
  siteInfo: siteInfo,
  posts: posts,
  pages: pages,
  categories: categories,
  current: current,
  users: users
})
export default rootReducer