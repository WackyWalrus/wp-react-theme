import { combineReducers } from 'redux'

import siteInfo from '../ducks/siteInfo.js'
import posts from '../ducks/posts.js'
import pages from '../ducks/pages.js'
import categories from '../ducks/categories.js'
import current from '../ducks/current.js'

const rootReducer = combineReducers({
  siteInfo: siteInfo,
  posts: posts,
  pages: pages,
  categories: categories,
  current: current
})
export default rootReducer