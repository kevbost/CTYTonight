import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as asyncReducer } from 'redux-thunk-status'
import viewer from './modules/viewer/reducer'

const rootReducer = ( state, action ) => {
  return appReducer( state, action )
}

const appReducer = combineReducers({
  viewer,
  async: asyncReducer,
  routing: routerReducer
})

export default rootReducer