import * as types from './actionTypes'
import update from 'immutability-helper'

export const INITIAL_STATE = {
  responseData: {}
}

export default ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
  case types.SET_RESPONSE:
    return update( state, {
      responseData: {
        $set: action.data
      }
    })

  default:
    return state
  }
}
