import { combineReducers } from 'redux'
import siteInfo from '../ducks/siteInfo.js'

const rootReducer = combineReducers({ siteInfo: siteInfo })
export default rootReducer